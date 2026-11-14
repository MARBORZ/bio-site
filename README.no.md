# bio-site

[English](README.md) · Norsk

Første versjon av porteføljen min. React + Vite på frontend, liten Express-server for kontaktskjemaet, e-post sendes via Resend.

Laget for å lære fullstack-deploy. Kjørte på en Google Cloud VM med Nginx og HTTPS. Nåværende side ligger i [marborz](https://github.com/MARBORZ/marborz).

- `src/` – React, Framer Motion, SCSS
- `bio-site-server/` – Express-API med rate limiting

## Kjør

```bash
npm install
npm run dev
```

Serveren trenger `.env` med `RESEND_API_KEY`, `FROM_EMAIL`, `MAIL_TO`, `PORT`:

```bash
cd bio-site-server
npm install
node index.js
```
