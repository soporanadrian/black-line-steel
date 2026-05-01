# BlackLineSteel - Presentation Website

O prezentare modernă și responsivă pentru o companie de mobilier industrial metalic. Website-ul este scris în întregime în limba română, cu design minimalist și industrial.

## 🏭 Caracteristici Principale

### Design & UX
- ✨ **Design Modern Minimalist** - Tonuri negre, oțel și accente metalice subtile
- 📱 **Responsiv 100%** - Optimizat pentru mobile, tablet și desktop
- 🎨 **Dark/Light Mode** - Comutare automată între moduri cu salvare în localStorage
- ⚡ **Performanță Optimă** - Lazy loading, animații CSS, cod optimizat
- ♿ **Accesibil** - WCAG 2.1 compliant, semantic HTML

### Funcționalități Interactive
- 🖼️ **Galerie Produse Interactive** - Modal cu imagini și descrieri
- 🔍 **Filtrare Produse** - Filtrare dinamică (Mese, Rafturi, Structuri)
- 🎮 **Configurator 3D Ușor** - Simulare personalizare mobilier
- 📝 **Formular Contact** - Integrare Netlify Forms
- 🎯 **Scroll Reveal Animations** - Animații la derulare pagină

### Optimizări Tehnice
- 📊 **SEO-Friendly** - Meta tags, Open Graph, semantic HTML
- 🚀 **Zero Dependencies** - Vanilla JavaScript, CSS pur
- 🔒 **Secure** - CSP headers, X-Frame-Options
- 🌍 **Multilingual Ready** - Ușor de adaptat pentru alte limbi
- 📈 **Lighthouse Ready** - Core Web Vitals optimized

## 📁 Structura Proiectului

```
black-line-steel/
├── index.html                 # Pagina principală (Home)
├── netlify.toml              # Configurație Netlify
├── README.md                 # Acest fișier
├── assets/
│   ├── css/
│   │   ├── styles.css        # Stiluri principale
│   │   └── responsive.css    # Media queries mobile/tablet
│   ├── js/
│   │   └── main.js           # JavaScript interactiv
│   └── images/               # Folder pentru imagini (placeholder)
└── ... alte fișiere statice
```

## 🚀 Instalare & Inițializare Locală

### Cerințe
- Browser modern (Chrome, Firefox, Safari, Edge)
- Un editor de text/cod (VS Code, Sublime, etc.)
- Server HTTP local (opțional, pentru testing)

### Paș 1: Clone sau descărcare
```bash
# Clonează repository-ul
git clone https://github.com/yourusername/blacklinesteel.git
cd black-line-steel

# Sau descarcă ZIP și despachetează
```

### Paș 2: Lansare locală
Pur și simplu deschide `index.html` în browser, sau folosește un server local:

#### Opțiunea 1: Python (dacă ai Python instalat)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Apoi accesează: `http://localhost:8000`

#### Opțiunea 2: Live Server în VS Code
1. Instalează extensia "Live Server" de Ritwick Dey
2. Click dreapta pe `index.html` → "Open with Live Server"

#### Opțiunea 3: Node.js avec http-server
```bash
npm install -g http-server
http-server
```

## 🌐 Deployment pe Netlify

### Metoda 1: GitHub + Netlify (Recomandată)

1. **Creează repository GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/blacklinesteel.git
   git push -u origin main
   ```

2. **Conectează cu Netlify**
   - Merge la https://app.netlify.com
   - Click "New site from Git"
   - Alege GitHub și autentifică-te
   - Selectează repository-ul tău
   - Configurație build:
     - **Base directory**: (gol)
     - **Build command**: (gol - nu e nevoie)
     - **Publish directory**: . (punctul curent)
   - Click "Deploy site"

3. **Setări suplimentare (opțional)**
   - Schimbă domeniu în "Site settings" → "General" → "Change site name"
   - Adaugă domeniu custom sub "Domain management"

### Metoda 2: Direct Upload pe Netlify

1. Merge la https://app.netlify.com/drop
2. Drag & drop folderul `black-line-steel`
3. Gata! Website-ul este live

### Metoda 3: Netlify CLI

```bash
# Instalează Netlify CLI
npm install -g netlify-cli

# Autentifică-te
netlify login

# Deploy
netlify deploy --prod

# Sau pentru development preview
netlify deploy
```

## 📋 Configurare Domeniu Custom

1. În Netlify, merge la "Domain settings"
2. Click "Add custom domain"
3. Introdu domeniu-ul tău
4. Update DNS records la registrar-ul tău:
   ```
   CNAME: your-site.netlify.app
   ```
5. Validiți DNS și activați HTTPS (automată)

## 🔧 Personalizare

### Schimbă Culorile
Deschide `assets/css/styles.css` și modifică variabilele în secțiunea `:root`:

```css
:root {
  --color-dark: #0f0f0f;        /* Culoare fundal dark */
  --color-primary: #d4af37;     /* Culoare accent (auriu) */
  --color-accent: #c0c0c0;      /* Culoare secundară (argintiu) */
  /* ... alte variabile */
}
```

### Modifică Produsele
În `assets/js/main.js`, găsește clasa `ProductGallery` și update array-ul `products`:

```javascript
this.products = [
  {
    id: 1,
    name: 'Numele Produsului',
    category: 'mese',  // sau 'rafturi', 'structuri'
    icon: '🏢',        // Emoji sau icon
    description: 'Descriere produs...'
  },
  // ... alte produse
]
```

### Schimbă Informațiile Contact
În `index.html`, secțiunea "Contact", update:
- Adresa
- Telefonul
- Email-ul
- Linkuri sociale

### Optimizare Imagini
1. Înlocuiește emoji-urile cu imagini reale în `assets/images/`
2. Folosiți format WebP pentru performanță maximă:
   ```html
   <picture>
     <source srcset="image.webp" type="image/webp">
     <img src="image.jpg" alt="Description">
   </picture>
   ```

## 🎯 SEO Optimization

### Ce e deja optimizat:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (pentru social sharing)
- ✅ Semantic HTML5 (header, nav, section, footer)
- ✅ Responsive design
- ✅ Fast loading (Core Web Vitals)
- ✅ Mobile-friendly
- ✅ Alt text pe imagini

### Ce mai poți face:
1. Creează `sitemap.xml`:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yourdomain.com</loc>
       <lastmod>2024-05-01</lastmod>
     </url>
   </urlset>
   ```

2. Adaugă `robots.txt`:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://yourdomain.com/sitemap.xml
   ```

3. Submit la Google Search Console
4. Setup Google Analytics

## 📱 Testare Responsivitate

### În Browser DevTools:
- Chrome/Firefox: F12 → Device Toolbar (Ctrl+Shift+M)
- Safari: Develop → Enter Responsive Design Mode

### Dimensiuni testate:
- 📱 Mobil: 375px, 414px (iPhone)
- 📱 Mobil mic: 320px (iPhone SE)
- 📱 Tablet: 768px (iPad)
- 💻 Laptop: 1024px+
- 🖥️ Desktop: 1440px+

## 🔒 Securitate

Configurate implicit în `netlify.toml`:
- X-Frame-Options: SAMEORIGIN (Prevenție clickjacking)
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin

## 📊 Performanță

### Metrici așteptate:
- ⚡ Lighthouse: 90+/100
- 🚀 First Contentful Paint (FCP): < 1.8s
- 🎯 Largest Contentful Paint (LCP): < 2.5s
- 🔄 Cumulative Layout Shift (CLS): < 0.1

### Optimizări aplicate:
- CSS/JS minificat
- Lazy loading imagini
- Caching rules în netlify.toml
- Efficient animations (CSS transforms)
- Web fonts preconnect

## 🐛 Troubleshooting

### Formularul nu funcționează
- Asigură-te că fișierul `netlify.toml` e în root
- Verifică că forma are `name="contact"` și `netlify` attribute
- Test: submit form și check Netlify Forms dashboard

### Animații sunt lente pe mobil
- Asta e normal pe device-uri mai vechi
- Site-ul e optimizat cu `prefers-reduced-motion` check

### Dark mode nu se salvează
- Verifică dacă localStorage e enabled
- Clear cookies și reîncarcă pagina

### Images nu se încarc
- Asigură-te că path-urile sunt relative
- Check console (F12 → Console) pentru erori 404

## 📚 Resurse Utile

- [Netlify Documentation](https://docs.netlify.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [Web.dev - Google's Web Performance](https://web.dev)

## 🎓 Learning Resources

Pentru a personaliza mai mult site-ul:
- **HTML/CSS/JS Tutorial**: https://www.freecodecamp.org
- **Responsive Design**: https://web.dev/responsive-web-design-basics
- **Web Performance**: https://web.dev/performance

## 📄 Licență

Acest proiect este disponibil sub licență MIT. Poți folosi, modifica și distribui conform termenilor MIT License.

## 👨‍💼 Suport & Contacte

- Pentru probleme Netlify: support@netlify.com
- Pentru întrebări site: Modifica contact form-ul din index.html

---

**Versiune**: 1.0.0  
**Data**: Mai 2024  
**Status**: Production Ready ✅

Enjoy! 🚀
