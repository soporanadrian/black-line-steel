# 🎨 Ghid de Personalizare - BlackLineSteel

Instrucțiuni complete pentru a personaliza site-ul cu brandingul tău, culorile și informațiile tale.

## 📝 Tabel de Conținut

1. [Schimba Informațiile Company](#schimba-informatiile-company)
2. [Schimba Culorile](#schimba-culorile)
3. [Schimba Produsele](#schimba-produsele)
4. [Schimba Imagini](#schimba-imagini)
5. [Adaugă Lingue Noi](#adauga-lingue-noi)
6. [Configurare Analytics](#configurare-analytics)

---

## 🏢 Schimba Informatiile Company

### Info Contact (Header & Footer)

Deschide `index.html` și caută:

```html
<!-- SECȚIUNEA CONTACT - Update acestea -->
<div class="contact-item">
  <div class="contact-icon">📍</div>
  <div class="contact-item-text">
    <h4>Adresă</h4>
    <p>Str. Industriei 42<br>București, România</p>
  </div>
</div>
```

**Înlocuiește cu informațiile tale:**
- Adresa fizică
- Telefonul
- Email-ul
- Linkuri sociale (Facebook, Instagram, LinkedIn)

### Link-uri Sociale

Caută secțiunea cu social links:

```html
<a href="#" class="social-link" aria-label="Facebook">f</a>
```

**Înlocuiește `#` cu:**
- Facebook: `https://facebook.com/yourusername`
- Instagram: `https://instagram.com/yourusername`
- LinkedIn: `https://linkedin.com/company/yourcompany`

### Text Hero Section

Caută:

```html
<h1>BlackLineSteel</h1>
<p class="tagline">Precizie | Durabilitate | Inginerie Industrială</p>
<p class="description">Mobilier metalic...</p>
```

**Schimba cu:**
- Schimbă H1 cu numele companiei tale
- Schimbă tagline
- Schimbă description

---

## 🎨 Schimba Culorile

### Culorile Principale

Deschide `assets/css/styles.css`

Caută secțiunea `:root` (primele 30 linii):

```css
:root {
  --color-dark: #0f0f0f;          /* Culoare fundal (negru) */
  --color-dark-secondary: #1a1a1a;/* Negru mai deschis */
  --color-light: #f5f5f5;         /* Culoare text light mode */
  --color-accent: #c0c0c0;        /* Argintiu */
  --color-primary: #d4af37;       /* AURIU (principala) */
  --color-steel: #4a4a4a;         /* Oțel gri */
}
```

### Opțiuni Culoare Populare

**Material Luxe (Ceva Similar):**
```css
--color-primary: #c0a080;      /* Auriu mat */
--color-accent: #8b7355;       /* Maro */
--color-steel: #2c2c2c;        /* Negru profund */
```

**Tech Minimal:**
```css
--color-primary: #00d4ff;      /* Cyan modern */
--color-accent: #ffffff;       /* Alb pur */
--color-steel: #1a1a1a;        /* Negru foarte închis */
```

**Modern Warm:**
```css
--color-primary: #ff6b35;      /* Orange coral */
--color-accent: #f7931e;       /* Orange warm */
--color-steel: #1a1a1a;        /* Negru */
```

**Clasic Corporate:**
```css
--color-primary: #003366;      /* Albastru naval */
--color-accent: #666666;       /* Gri */
--color-steel: #333333;        /* Aproape negru */
```

### Cum să Testezi Culorile

1. Deschide site-ul local
2. Deschide DevTools: `F12`
3. Inspector Element pe orice text auriu
4. Schimbă valoarea hex în real-time
5. Cand ți place, copiază valorile în `styles.css`

---

## 📦 Schimba Produsele

Deschide `assets/js/main.js`

Caută clasa `ProductGallery` și array-ul `this.products`:

```javascript
this.products = [
  {
    id: 1,
    name: 'Masă de Lucru Industrială',
    category: 'mese',        // 'mese', 'rafturi', sau 'structuri'
    icon: '🏢',              // Orice emoji
    description: 'Descriere lungă a produsului...'
  },
  // ... mai multe produse
]
```

### Template Produs Nou

```javascript
{
  id: 9,                           // Număr unic
  name: 'Numele Produsului',       // Titlu
  category: 'mese',               // Categorie
  icon: '🛋️',                     // Emoji (sau /)
  description: 'Descriere completă și detalii despre produs. Poți folosi <strong>HTML</strong> și <em>formatare</em>.'
}
```

### Emoji-uri Utile

- 🪑 Scaun
- 🛋️ Canapea
- 🛏️ Pat
- 📚 Raft
- 📦 Cutie/Storage
- ⚙️ Mecanic/Industrial
- 🏗️ Construcție
- 🏢 Birou
- 💼 Business
- 🤝 Meeting
- 🖼️ Decor
- 🏭 Fabrica

---

## 🖼️ Schimba Imagini

### Înlocuiește Emoji cu Imagini Reale

**Pasul 1: Adaugă imagini în `assets/images/`**

Salvează imagini ca:
- `product-1.jpg`
- `product-2.jpg`
- etc.

**Pasul 2: Schimbă în HTML**

În `index.html`, caută:

```html
<div class="product-image">🏢</div>
```

Înlocuiește cu:

```html
<div class="product-image">
  <img src="assets/images/product-1.jpg" alt="Masă Industrială" loading="lazy">
</div>
```

**Pasul 3: Update CSS pentru imagini**

În `assets/css/styles.css`, caută `.product-image`:

```css
.product-image {
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, var(--color-steel) 0%, var(--color-dark-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: relative;
  overflow: hidden;
}
```

Schimbă cu:

```css
.product-image {
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Format Imagine Optim

- **Format**: WebP (cel mai bun) sau JPG
- **Dimensiuni**: Min 800x600px, Max 2000x2000px
- **Size**: Optimizează cu TinyJPG.com sau ImageOptim
- **Responsive**: Folosește `srcset` pentru mobile

```html
<picture>
  <source srcset="assets/images/product-1.webp" type="image/webp">
  <source srcset="assets/images/product-1.jpg" type="image/jpeg">
  <img src="assets/images/product-1.jpg" alt="Descriere">
</picture>
```

---

## 🌍 Adauga Lingue Noi

Site-ul e scris în limba română. Dacă vrei să adaugi alte limbi:

### Opțiunea 1: Pagini Separate (Simplu)

1. Copiază `index.html` → `index-en.html`
2. Traduce textul în engleză
3. Adaugă link-uri în header:

```html
<nav>
  <a href="index-ro.html">RO</a>
  <a href="index-en.html">EN</a>
</nav>
```

### Opțiunea 2: Subdirectoare

```
/ro/index.html
/en/index.html
/de/index.html
```

Și în `netlify.toml`:

```toml
[[redirects]]
  from = "/ro/*"
  to = "/ro/index.html"
  status = 200
```

---

## 📊 Configurare Analytics

### Google Analytics 4

1. Merge la https://analytics.google.com
2. Creează property nou
3. Copiază ID-ul (GT-XXXXX)
4. În `index.html`, după `</head>` adaugă:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GT-XXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GT-XXXXX', {
    'page_title': 'BlackLineSteel',
    'page_path': window.location.pathname
  });
</script>
```

### Microsoft Clarity

1. Merge la https://clarity.microsoft.com
2. Creează project
3. Copiază script din "Install Code"
4. Adaugă în `index.html` în `<head>`

### Hotjar Heatmaps

Similar cu Google Analytics - copiază tracking code.

---

## ⚙️ Alte Personalizări

### Schimba Font

În `assets/css/styles.css`:

```css
--font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
--font-family-heading: 'Arial', 'Helvetica', sans-serif;
```

**Opțiuni popular:**
- **Sans-serif modern**: `'Inter', 'Poppins', 'Roboto'`
- **Serif elegant**: `'Playfair Display', 'Georgia'`
- **Monospace tech**: `'JetBrains Mono', 'Courier New'`

### Schimba Logo

Curent: Pătrat simplu în header

Înlocuiește:

```html
<span class="logo-icon"></span>
```

Cu:

```html
<img src="assets/images/logo.png" alt="Logo" style="width: 32px; height: 32px;">
```

### Schimba Animații

Deschide `assets/css/styles.css`, caută secțiunile cu `@keyframes`:

```css
@keyframes slideGrid {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100px);
  }
}
```

Modifică valorile pentru efect diferit.

### Schimba Viteza Animații

În `:root`:

```css
--transition-fast: 150ms ease-in-out;   /* 0.15s */
--transition-normal: 300ms ease-in-out; /* 0.3s */
--transition-slow: 500ms ease-in-out;   /* 0.5s */
```

Pune valori mai mari pentru animații mai lente:

```css
--transition-normal: 600ms ease-in-out; /* 0.6s - mai lent */
```

---

## ✅ Checklist Final

După personalizare:

- [ ] Company info actualizat (telefon, email, adresă)
- [ ] Culorile schimbate (dacă vrei)
- [ ] Produse actualizate cu informații tale
- [ ] Imagini reale adăugate (opțional)
- [ ] Link-uri sociale configurate
- [ ] Analytics setup
- [ ] Testat pe mobil, tablet, desktop
- [ ] Verificat pe browsers diferite (Chrome, Firefox, Safari)
- [ ] Formular contact testat
- [ ] Lighthouse score verificat (F12 → Lighthouse)

---

## 🚀 Deploy cu Schimbări

```bash
# Dacă ai GitHub
git add .
git commit -m "Personalizare site - update colors, products, info"
git push

# Netlify va deploy automat
```

---

## 📚 Resurse Utile

- **Color Picker**: https://coolors.co
- **Font Matching**: https://fonts.google.com
- **Image Optimization**: https://tinyjpg.com
- **CSS Animation**: https://animate.style
- **Icon Library**: https://www.flaticon.com

---

**Gata! Site-ul tău e acum personalizat cu brandingul tău! 🎉**

Dacă ai întrebări, citeți `README.md`.
