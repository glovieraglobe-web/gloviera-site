const crypto = require('crypto');

const MERCHANT_ID = requireEnv('PHONEPE_MERCHANT_ID');
const SALT_KEY = requireEnv('PHONEPE_SALT_KEY');
const SALT_INDEX = requireEnv('PHONEPE_SALT_INDEX');
const BASE_URL = process.env.PHONEPE_BASE_URL || 'https://api-preprod.phonepe.com/apis/pg-sandbox';
const CALLBACK_URL = process.env.PHONEPE_CALLBACK_URL || `${process.env.SERVER_BASE_URL || 'http://localhost:5000'}/api/payments/webhook`;
const REDIRECT_URL = process.env.PHONEPE_REDIRECT_URL || `${process.env.CLIENT_BASE_URL || 'http://localhost:4173'}/payment-status.html`;

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function toBase64(data) {
  return Buffer.from(JSON.stringify(data)).toString('base64');
}

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function buildVerifyHeader(payloadBase64, path) {
  const checksum = sha256(`${payloadBase64}${path}${SALT_KEY}`);
  return `${checksum}###${SALT_INDEX}`;
}

async function createPayment({ amount, currency = 'INR', metadata = {}, customer = {} }) {
  const path = '/pg/v1/pay';

  const merchantTransactionId = crypto.randomUUID();
  const amountPaise = Math.round(Number(amount) * 100);

  const payload = {
    merchantId: MERCHANT_ID,
    merchantTransactionId,
    merchantUserId: customer.id || customer.email || customer.phone || `guest_${Date.now()}`,
    amount: amountPaise,
    currency,
    redirectUrl: `${REDIRECT_URL}?tx=${merchantTransactionId}`,
    redirectMode: 'POST',
    callbackUrl: CALLBACK_URL,
    mobileNumber: customer.phone || customer.mobileNumber,
    paymentInstrument: {
      type: 'PAY_PAGE'
    },
    metadata
  };

  const payloadBase64 = toBase64(payload);

  const response = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      'X-VERIFY': buildVerifyHeader(payloadBase64, path),
      'X-MERCHANT-ID': MERCHANT_ID
    },
    body: JSON.stringify({ request: payloadBase64 })
  });

  const data = await response.json();

  if (!response.ok || data.success === false) {
    throw new Error(data.message || data.code || 'PhonePe payment creation failed');
  }

  const redirectUrl = data?.data?.instrumentResponse?.redirectInfo?.url;

  return {
    merchantTransactionId,
    redirectUrl,
    paymentUrl: redirectUrl,
    raw: data
  };
}

async function checkStatus(merchantTransactionId) {
  const path = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}`;

  const response = await fetch(`${BASE_URL}${path}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-VERIFY': buildVerifyHeader('', path),
      'X-MERCHANT-ID': MERCHANT_ID
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || data.code || 'Unable to fetch PhonePe payment status');
  }

  return data;
}

async function verifyWebhook(signature, payload) {
  if (!signature) {
    throw new Error('Missing X-VERIFY signature');
  }

  const base64Response = payload?.response;
  if (!base64Response) {
    throw new Error('Malformed webhook payload');
  }

  const expected = buildVerifyHeader(base64Response, '');
  if (expected !== signature) {
    throw new Error('Signature mismatch');
  }

  const decoded = JSON.parse(Buffer.from(base64Response, 'base64').toString('utf-8'));
  console.info('PhonePe webhook received', decoded);
  return decoded;
}

module.exports = {
  createPayment,
  checkStatus,
  verifyWebhook
};
