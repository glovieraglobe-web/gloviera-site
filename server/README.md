# Gloviéra API (PhonePe Gateway)

This Express server brokers secure payment creation and status checks with PhonePe while keeping the merchant secret on the backend.

## Getting Started

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

The dev server listens on `http://localhost:5000` by default.

## Environment Variables

| Key | Description |
| --- | --- |
| `PHONEPE_MERCHANT_ID` | Merchant ID issued by PhonePe |
| `PHONEPE_SALT_KEY` | Secret salt key used to sign requests |
| `PHONEPE_SALT_INDEX` | Salt index associated with the salt key |
| `PHONEPE_BASE_URL` | API host (sandbox or production). Defaults to the sandbox URL |
| `SERVER_BASE_URL` | Public URL of this server (used for callback defaults) |
| `CLIENT_BASE_URL` | Public URL of the web client |
| `PHONEPE_CALLBACK_URL` | Explicit callback override if the default is not suitable |
| `PHONEPE_REDIRECT_URL` | Browser redirect page that handles PhonePe completion |

## REST Contract

- `POST /api/payments/create` – Generates a PhonePe transaction and returns the redirect URL.
- `GET /api/payments/status/:transactionId` – Polls PhonePe for the latest transaction status.
- `POST /api/payments/webhook` – Receives async notifications from PhonePe and verifies the signature.

> The webhook currently logs payloads. Extend it to persist order state in Firestore or any database of your choice.

## Front-End Integration

The static front-end calls `/api/payments/create` when the user hits “Buy Now”.  
Once PhonePe finishes, redirect back to `PHONEPE_REDIRECT_URL` and use `/api/payments/status/:transactionId` to confirm final state.

## Production Tips

- Deploy behind HTTPS (e.g., Render, Railway, or your own Node host).
- Store secrets using the platform’s secret manager (never commit `.env`).
- Configure PhonePe dashboard callbacks to point at `/api/payments/webhook`.
