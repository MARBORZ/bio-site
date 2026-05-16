# marborz.one — Bio Site (Full-Stack Portefølje)

En produksjonsklar full-stack porteføljenettside med React/Vite frontend og Node.js/Express backend med fungerende kontaktskjema. Deployet på Google Cloud VPS med Nginx, HTTPS og pm2 prosesshåndtering.

## 🌐 Live Nettsted

**URL:** https://marborz.one

## 🎯 Om

marborz.one er en profesjonell porteføljenettside som viser frem prosjekter, ferdigheter og tilbyr et funksjonelt kontaktskjema med ekte e-postlevering. Nettstedet demonstrerer full-stack utviklingskompetanse, fra frontend-animasjoner til backend API-integrasjon og produksjonsdeployment.

## ✨ Funksjoner

- **Responsivt Porteføljelayout** — Hero-seksjon, prosjektutstilling og kontaktskjema
- **Fungerende Kontaktskjema** — Ekte e-postlevering via Resend API
- **Jevne Animasjoner** — Framer Motion for flytende UI-overganger
- **API Rate Limiting** — Beskyttelse mot spam og misbruk
- **HTTPS Aktivert** — Sikker tilkobling med Let's Encrypt SSL
- **Produksjonsinfrastruktur** — VPS-deployment med Nginx og pm2
- **BEM-metodikk** — Ren, vedlikeholdbar SCSS-arkitektur

## 🛠️ Teknologi

### Frontend
- **React 19** — Moderne React med nyeste funksjoner
- **Vite** — Raskt byggeverktøy og dev-server
- **SCSS (BEM)** — Modulær, vedlikeholdbar styling
- **Framer Motion** — Produksjonsklare animasjoner
- **ESLint** — Kodekvalitetshåndhevelse

### Backend
- **Node.js** — JavaScript runtime
- **Express 5** — Webapplikasjonsrammeverk
- **Resend** — E-postleveringsAPI
- **express-rate-limit** — API-beskyttelse
- **nodemailer** — E-postsendingsbibliotek
- **dotenv** — Miljøvariabelhåndtering
- **CORS** — Cross-origin resource sharing

### Infrastruktur
- **Google Cloud VPS** — Virtuell privat server hosting
- **Nginx** — Webserver og reverse proxy
- **Let's Encrypt (certbot)** — Gratis SSL/TLS-sertifikater
- **pm2** — Prosessmanager for Node.js
- **Ubuntu Server** — Operativsystem

## 🚀 Kom i Gang

### Forutsetninger

- Node.js 18+ og npm
- (For produksjon) VPS med Ubuntu, Nginx og pm2

### Lokal Utvikling

#### Frontend

1. Installer avhengigheter:
```bash
npm install
```

2. Start utviklingsserver:
```bash
npm run dev
```

3. Åpne `http://localhost:5173` i nettleseren

#### Backend

1. Naviger til backend-katalog:
```bash
cd bio-site-server
```

2. Opprett `.env`-fil:
```env
PORT=3001
RESEND_API_KEY=din_resend_api_nøkkel
FROM_EMAIL=din_epost@domene.com
TO_EMAIL=mottaker@domene.com
```

3. Installer avhengigheter og start:
```bash
npm install
npm start
```

Backend kjører på `http://localhost:3001`

## 🌐 Produksjonsdeployment

### Serveroppsett

1. **Frontend Build**
   - Bygg: `npm run build`
   - Last opp `dist/` til: `/var/www/marborz.one/frontend-dist`

2. **Backend Deployment**
   - Last opp `bio-site-server/` til: `/var/www/bio-site-server`
   - Konfigurer miljøvariabler
   - Start med pm2: `pm2 start ecosystem.config.js`

3. **Nginx-konfigurasjon**
   ```nginx
   server {
       listen 80;
       server_name marborz.one www.marborz.one;
       
       root /var/www/marborz.one/frontend-dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       location /api/ {
           proxy_pass http://localhost:3001;
       }
   }
   ```

4. **HTTPS-oppsett**
   ```bash
   sudo certbot --nginx -d marborz.one -d www.marborz.one
   ```

## 🔒 Sikkerhetsfunksjoner

- **Rate Limiting** — Forhindrer spam og misbruk (15 forespørsler per 15 minutter)
- **CORS-konfigurasjon** — Begrenser API-tilgang til tillatte opprinnelser
- **Miljøvariabler** — Sensitiv data lagret sikkert
- **HTTPS** — All trafikk kryptert med SSL/TLS
- **Input-validering** — Server-side validering av skjemadata

## 🎓 Læringsmål

Dette prosjektet demonstrerer:

- **Full-Stack Utvikling** — Frontend + Backend + Infrastruktur
- **API-integrasjon** — RESTful API med Express
- **E-postlevering** — Tredjeparts API-integrasjon (Resend)
- **Produksjonsdeployment** — VPS-oppsett, Nginx-konfigurasjon, SSL
- **Prosesshåndtering** — pm2 for Node.js-applikasjoner
- **Sikkerhetsbeste praksis** — Rate limiting, CORS, HTTPS

## 📄 Lisens

Dette prosjektet er lisensiert under vilkårene spesifisert i `LICENSE`.

---

**Merk:** Dette er et produksjonsporteføljeprosjekt som demonstrerer full-stack utvikling, API-integrasjon og profesjonelle deployment-praksiser.
