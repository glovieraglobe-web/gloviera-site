## Gloviéra Glow & Glam Hub

This repository powers the Gloviéra marketing site and booking experience.  
Run it locally with a lightweight Node-powered static server and ship a production bundle via the build script.

### Prerequisites

- Node.js 18+

### Local Development

```bash
npm install   # no external deps yet, keeps package-lock current
npm run dev  # serves from the project root on http://localhost:4173
```

### Production Build

```bash
npm run build
# Output is written to dist/ and is ready for static hosting
```

The build script copies static assets (`index.html`, `components/`, `products/`, etc.) into `dist/` while keeping the source tree untouched.

### PWA Goodies

- `manifest.webmanifest` advertises install metadata and icons.
- `service-worker.js` pre-caches the app shell for offline access.
- A lightweight install banner (`installBanner`) guides users to add Gloviéra to their home screen.

### Mobile Shell

- Capacitor scaffolding lives in `mobile/` with a dedicated `package.json`.
- `npm run mobile:sync` builds the web app and runs `cap sync` to refresh Android/iOS shells.
- Use `npm run mobile:android` or `npm run mobile:ios` to open the platform IDEs once Capacitor deps are installed.

### PhonePe Backend

- API scaffolding lives in `server/` (Express + PhonePe helpers).
- Configure secrets via `server/.env` (see `.env.example`).
- Start it locally with:

  ```bash
  cd server
  npm install
  npm run dev
  ```

- The front-end now calls `POST /api/payments/create` to obtain the PhonePe redirect URL and logs pending orders in Firestore.

### Next Steps

- Persist PhonePe webhook events to Firestore and update order statuses automatically.
- Harden error handling (retry policies, exponential backoff) for production traffic.
