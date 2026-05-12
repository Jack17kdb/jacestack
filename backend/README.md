# JaceStack AI — Backend

Express + MongoDB backend for the JaceStack AI portfolio site.

## Setup
1. `npm install`
2. Copy `.env.example` to `.env` and fill in values
3. `npm run dev`

## Env Variables
- `PORT` — server port (default 5000)
- `MONGODB_URI` — MongoDB connection string
- `BREVO_API_KEY` — Brevo transactional email API key
- `FROM_EMAIL` — sender email address
- `FROM_NAME` — sender display name
- `FRONTEND_URL` — allowed CORS origin

## Endpoints
- `GET  /api/health` — health check
- `POST /api/subscribe` — subscribe with `{ email }`, saves to MongoDB, sends welcome email via Brevo
