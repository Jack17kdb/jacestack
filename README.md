# JaceStack AI

AI-Powered MERN portfolio

## Structure
```
jacestack-ai/
├── frontend/   # React + Vite + Tailwind (portfolio site)
└── backend/    # Express + MongoDB + Brevo (subscribe API)
```

## Quick Start

### Backend
```bash
cd backend
npm install
cp .env.example .env   # fill in MONGODB_URI and BREVO_API_KEY
npm run dev
```

### Frontend
```bash
cd frontend
npm install
cp .env.example .env   # set VITE_API_URL to your backend URL
npm run dev
```
