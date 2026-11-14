# bio-site

First version of my portfolio site: React (Vite) on the front, a small Express server that sends contact form messages through Resend.

It ran on a Google Cloud VM behind Nginx with HTTPS. The current site lives in [marborz](https://github.com/MARBORZ/marborz).

## Structure

- `src/` – React app, Framer Motion for animations, SCSS
- `bio-site-server/` – Express API with rate limiting for the contact form

## Run

```bash
npm install
npm run dev
```

The server needs a `.env` with `RESEND_API_KEY`, `FROM_EMAIL`, `MAIL_TO` and `PORT`:

```bash
cd bio-site-server
npm install
node index.js
```
