# marborz_v1

English · [Norsk](README.no.md)

First version of my portfolio. React + Vite on the front, small Express server for the contact form, emails go through Resend.

Built to learn full-stack deployment. Was running on a Google Cloud VM with Nginx and HTTPS. Current site is in [marborz](https://github.com/MARBORZ/marborz).

- `src/` – React, Framer Motion, SCSS
- `bio-site-server/` – Express API with rate limiting

## Run

```bash
npm install
npm run dev
```

Server needs `.env` with `RESEND_API_KEY`, `FROM_EMAIL`, `MAIL_TO`, `PORT`:

```bash
cd bio-site-server
npm install
node index.js
```
