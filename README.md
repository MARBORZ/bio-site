# marborz.one — Bio Site (Full-Stack Portfolio)

A production-ready full-stack portfolio website featuring a React/Vite frontend and Node.js/Express backend with a working contact form. Deployed on Google Cloud VPS with Nginx, HTTPS, and pm2 process management.

## 🌐 Live Site

**URL:** https://marborz.one

## 🎯 About

marborz.one is a professional portfolio website showcasing projects, skills, and providing a functional contact form with real email delivery. The site demonstrates full-stack development capabilities, from frontend animations to backend API integration and production deployment.

## ✨ Features

- **Responsive Portfolio Layout** — Hero section, project showcase, and contact form
- **Working Contact Form** — Real email delivery via Resend API
- **Smooth Animations** — Framer Motion for fluid UI transitions
- **API Rate Limiting** — Protection against spam and abuse
- **HTTPS Enabled** — Secure connection with Let's Encrypt SSL
- **Production Infrastructure** — VPS deployment with Nginx and pm2
- **BEM Methodology** — Clean, maintainable SCSS architecture

## 🛠️ Tech Stack

### Frontend
- **React 19** — Modern React with latest features
- **Vite** — Fast build tool and dev server
- **SCSS (BEM)** — Modular, maintainable styling
- **Framer Motion** — Production-ready animations
- **ESLint** — Code quality enforcement

### Backend
- **Node.js** — JavaScript runtime
- **Express 5** — Web application framework
- **Resend** — Email delivery API
- **express-rate-limit** — API protection
- **nodemailer** — Email sending library
- **dotenv** — Environment variable management
- **CORS** — Cross-origin resource sharing

### Infrastructure
- **Google Cloud VPS** — Virtual private server hosting
- **Nginx** — Web server and reverse proxy
- **Let's Encrypt (certbot)** — Free SSL/TLS certificates
- **pm2** — Process manager for Node.js
- **Ubuntu Server** — Operating system

## 📁 Project Structure

```
bio-site/
├── src/                    # Frontend source
│   ├── components/         # React components
│   ├── data/              # Static data
│   ├── motion/            # Framer Motion configs
│   ├── styles/            # SCSS files (BEM)
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── bio-site-server/       # Backend API
│   ├── server.js          # Express server
│   ├── ecosystem.config.js # pm2 configuration
│   └── package.json       # Backend dependencies
├── public/                # Static assets
├── index.html             # HTML template
├── package.json           # Frontend dependencies
└── vite.config.js         # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- (For production) VPS with Ubuntu, Nginx, and pm2

### Local Development

#### Frontend

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open `http://localhost:5173` in your browser

#### Backend

1. Navigate to backend directory:
```bash
cd bio-site-server
```

2. Create `.env` file:
```env
PORT=3001
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=your_email@domain.com
TO_EMAIL=recipient@domain.com
```

3. Install dependencies and start:
```bash
npm install
npm start
```

Backend runs on `http://localhost:3001`

## 📜 Available Scripts

### Frontend
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

### Backend
- `npm start` — Start Express server
- `npm run dev` — Start with nodemon (auto-reload)

## 🌐 Production Deployment

### Server Setup

1. **Frontend Build**
   - Build: `npm run build`
   - Upload `dist/` to: `/var/www/marborz.one/frontend-dist`

2. **Backend Deployment**
   - Upload `bio-site-server/` to: `/var/www/bio-site-server`
   - Configure environment variables
   - Start with pm2: `pm2 start ecosystem.config.js`

3. **Nginx Configuration**
   ```nginx
   server {
       listen 80;
       server_name marborz.one www.marborz.one;
       
       # Frontend
       root /var/www/marborz.one/frontend-dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       # Backend API
       location /api/ {
           proxy_pass http://localhost:3001;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **HTTPS Setup**
   ```bash
   sudo certbot --nginx -d marborz.one -d www.marborz.one
   ```

### Useful Production Commands

```bash
# pm2 process management
pm2 status
pm2 logs bio-api
pm2 restart bio-api
pm2 save

# Nginx
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl status nginx

# SSL certificate renewal
sudo certbot renew --dry-run
```

## 🔒 Security Features

- **Rate Limiting** — Prevents spam and abuse (15 requests per 15 minutes)
- **CORS Configuration** — Restricts API access to allowed origins
- **Environment Variables** — Sensitive data stored securely
- **HTTPS** — All traffic encrypted with SSL/TLS
- **Input Validation** — Server-side validation of form data

## 🎓 Learning Goals

This project demonstrates:

- **Full-Stack Development** — Frontend + Backend + Infrastructure
- **API Integration** — RESTful API with Express
- **Email Delivery** — Third-party API integration (Resend)
- **Production Deployment** — VPS setup, Nginx configuration, SSL
- **Process Management** — pm2 for Node.js applications
- **Security Best Practices** — Rate limiting, CORS, HTTPS
- **Modern React** — Hooks, Framer Motion, component architecture

## 📝 API Endpoints

### POST /api/contact
Send contact form submission

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to connect!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Rate Limit:** 15 requests per 15 minutes per IP

## 🔧 Development Notes

### SCSS Architecture (BEM)
- Block-Element-Modifier methodology
- Modular component styles
- Maintainable and scalable CSS

### Framer Motion Patterns
- Page transitions
- Scroll-triggered animations
- Hover effects
- Stagger animations

## 🚀 Future Improvements

- [ ] Toast notifications for form feedback
- [ ] Server-side logging with morgan
- [ ] Log rotation for production
- [ ] CI/CD pipeline with GitHub Actions
- [ ] Analytics integration
- [ ] Performance monitoring

## 📄 License

This project is licensed under the terms specified in `LICENSE`.

## 🙏 Acknowledgments

- Built as a production portfolio showcase
- Demonstrates full-stack development skills
- Real-world deployment experience

---

**Note:** This is a production portfolio project demonstrating full-stack development, API integration, and professional deployment practices.
