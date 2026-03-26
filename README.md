# marborz.one — Bio Site (Full-Stack)

Production portfolio website with a React/Vite frontend and a Node/Express backend for a working contact form (email via Resend). Deployed on a Google Cloud VPS behind Nginx with HTTPS and pm2 process management.

## Live
- https://marborz.one

## Tech Stack

### Frontend
- React
- Vite
- SCSS (BEM)
- Framer Motion

### Backend
- Node.js
- Express
- Resend (email API)
- Rate limiting (express-rate-limit)

### Infrastructure
- Google Cloud VPS
- Nginx (static hosting + reverse proxy)
- Let’s Encrypt (certbot) for HTTPS
- pm2 (process manager)

---

## Project Structure (high level)


---

## Local Development

Frontend
npm install
npm run dev

## Backend

cd bio-site-server
npm install
npm start

## Production Deployment Notes (summary)

Frontend build uploaded to: /var/www/marborz.one/frontend-dist

Backend uploaded to: /var/www/bio-site-server

Backend started with pm2 (env via ecosystem config)

Nginx configured to:

serve frontend

proxy /api/ -> http://localhost:3001

## Useful commands

pm2 status
pm2 logs bio-api
pm2 restart bio-api
sudo nginx -t
sudo systemctl reload nginx

## What’s implemented

Responsive portfolio layout (Hero / Projects / Contact)

Working contact form (real email delivery)

Basic API protection (rate limit)

HTTPS + production server setup

Next ideas (optional)

Better UI feedback on submit (toast / inline status)

Logging + monitoring (morgan, rotating logs)

CI/CD deployment (GitHub Actions)