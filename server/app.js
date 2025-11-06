const http = require('http');
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const phonepe = require('./phonepe');

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim())
  : ['http://localhost:4173', 'http://localhost:5000'];

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.post('/api/payments/create', async (req, res) => {
  try {
    const { amount, currency = 'INR', metadata = {}, customer = {} } = req.body || {};

    if (!amount || Number.isNaN(Number(amount))) {
      return res.status(400).json({ message: 'Amount is required' });
    }

    const payment = await phonepe.createPayment({
      amount,
      currency,
      metadata,
      customer
    });

    res.json(payment);
  } catch (error) {
    console.error('PhonePe create payment failed', error);
    res.status(500).json({ message: 'Unable to create payment', details: error.message });
  }
});

app.get('/api/payments/status/:transactionId', async (req, res) => {
  try {
    const { transactionId } = req.params;
    const status = await phonepe.checkStatus(transactionId);
    res.json(status);
  } catch (error) {
    console.error('PhonePe status check failed', error);
    res.status(500).json({ message: 'Unable to fetch status', details: error.message });
  }
});

app.post('/api/payments/webhook', express.json({ type: '*/*' }), async (req, res) => {
  try {
    const signature = req.headers['x-verify'];
    await phonepe.verifyWebhook(signature, req.body);
    res.status(200).json({ received: true });
  } catch (error) {
    console.error('PhonePe webhook verification failed', error);
    res.status(400).json({ message: 'Invalid webhook', details: error.message });
  }
});

app.use((_req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

const port = Number(process.env.PORT || 5000);
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Gloviéra API listening on http://localhost:${port}`);
});
