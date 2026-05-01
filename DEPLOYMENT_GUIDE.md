# 🚀 Ghid Rapid de Deployment - BlackLineSteel

Instrucțiuni pas cu pas pentru a-ți pune website-ul BlackLineSteel online pe Netlify în mai puțin de 5 minute.

## 📋 Ce ai nevoie
- O cont GitHub (gratuit pe github.com)
- Un cont Netlify (gratuit pe netlify.com)
- Folderul `black-line-steel` cu toate fișierele

## 🎯 3 Moduri de Deployment

### **OPȚIUNEA 1: Drag & Drop (Cel mai Rapid) ⚡**

Cel mai ușor! Zero configurare.

1. Merge la **https://app.netlify.com/drop**
2. **Drag & drop** folderul `black-line-steel` în zona albastră
3. Gata! Website-ul e live în 30 de secunde
4. Netlify ți-va da un URL random: `https://random-name-123.netlify.app`

✅ **Avantaje**: Instant, zero setup  
❌ **Dezavantaje**: URL urât, greu de schimbat

---

### **OPȚIUNEA 2: GitHub + Netlify (Recomandată) ⭐**

Cea mai profesională și ușor de actualizat.

#### **Pasul 1: Creează GitHub Repository**

1. Merge la **https://github.com/new**
2. Nume repository: `blacklinesteel` (sau cum vrei)
3. Descriere: `Industrial metal furniture presentation website`
4. Alege **Public** (pentru Netlify)
5. ❌ Nu selecta "Add README" (deja ai)
6. Click **Create repository**

#### **Pasul 2: Upload Files pe GitHub**

**Dacă ai Git instalat:**
```bash
# Deschide terminal/cmd în folderul black-line-steel
cd black-line-steel

# Inițializează Git
git init
git add .
git commit -m "Initial commit - BlackLineSteel website"
git branch -M main

# Adaugă remote (înlocuiește USERNAME cu al tău)
git remote add origin https://github.com/USERNAME/blacklinesteel.git
git push -u origin main
```

**Dacă nu ai Git:**
1. Merge la repo-ul tău nou pe GitHub
2. Click pe butonul verde **"Code"** → **"Upload files"**
3. Drag & drop toate fișierele din `black-line-steel`
4. Click **"Commit changes"**

#### **Pasul 3: Conectează cu Netlify**

1. Merge la **https://app.netlify.com**
2. Login sau creează cont (poți folosi GitHub)
3. Click **"New site from Git"**
4. Selectează **GitHub**
5. Autentifică-te cu GitHub
6. Caută și selectează repo **`blacklinesteel`**
7. Setări build (lasă așa):
   - **Base directory**: (gol)
   - **Build command**: (gol)
   - **Publish directory**: `.` (punct)
8. Click **"Deploy site"**

**GATA! 🎉**

Netlify va deploy automat fiecare dată când push-ui pe GitHub.

---

### **OPȚIUNEA 3: Netlify CLI (Pentru Developeri) 💻**

Dacă ai Node.js instalat și ești confortabil cu terminal.

```bash
# 1. Instalează Netlify CLI
npm install -g netlify-cli

# 2. Login la Netlify
netlify login

# 3. Deploy
cd black-line-steel
netlify deploy --prod
```

---

## 🌐 Schimbă Domeniu (Opțional)

După deployment, site-ul ți va avea URL-ul: `https://random-name-123.netlify.app`

### Opțiunea A: Schimbă Nume Subdomain (Gratuit)

1. Merge la Netlify Dashboard
2. Selectează site-ul
3. **Site settings** → **General**
4. Sub **Site details**, click pe **Change site name**
5. Introdu: `blacklinesteel` (sau ce vrei)
6. Acum URL va fi: `https://blacklinesteel.netlify.app`

### Opțiunea B: Domeniu Custom (Plătit)

Dacă vrei `https://blacklinesteel.ro`:

1. Cumpără domeniu de pe un registrar (NameCheap, GoDaddy, Hostinger, etc.)
2. În Netlify: **Domain settings** → **Add custom domain**
3. Introdu domeniu-ul: `blacklinesteel.ro`
4. Urmeaza pașii pentru setare DNS
5. Așteptă 24-48 ore pentru DNS propagation
6. HTTPS e automată (free)

---

## ✏️ Cum să Actualizezi Site-ul

### Dacă ai folosit GitHub:
```bash
# 1. Fă modificări în fișiere
# 2. Commit și push
git add .
git commit -m "Descrierea schimbării"
git push

# Netlify va deploy automat în ~1 minut
```

### Dacă ai folosit Drag & Drop:
1. Editează fișierele local
2. Re-drag & drop pe Netlify (mai simplu: re-upload fișierele schimbate)
3. Sau conectează repo-ul GitHub later

---

## 🔍 Verifică că E Live

1. Accesează URL-ul tău
2. Deschide Console (F12 → Console) - nu ar trebui să fie erori roșii
3. Testeaza:
   - ✅ Meniul de navigare
   - ✅ Dark/Light mode toggle
   - ✅ Scroll reveals (animații)
   - ✅ Product filtering
   - ✅ Contact form

---

## 🐛 Troubleshooting

### Site-ul nu se încarcă
- ✅ Check URL-ul (https, nu http)
- ✅ Așteptă 1-2 minute după deploy
- ✅ Hard refresh: `Ctrl+Shift+R` (Windows) sau `Cmd+Shift+R` (Mac)

### Formularul nu funcționează
- Verifică că `netlify.toml` e în root folder
- Verifică Netlify Forms dashboard (Site → Forms)

### Dark mode nu merge
- Clear browser cache (F12 → Application → Local Storage → Delete all)

### Animații sunt lente
- Asta e normal pe device-uri vechi - site-ul e optimizat

---

## 📊 Monitorizează Performance

### Netlify Analytics (Gratuit)
1. Merge la Netlify Dashboard
2. Site → Analytics
3. Vezi traffic, build times, errors

### Google Analytics (Opțional)
```html
<!-- Adaugă în <head> al index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🎓 Următorii Pași

Felicitări! Website-ul tău e live! 🎉

**Pentru a-l îmbunătăți:**
1. Adaugă imagini reale în loc de emoji
2. Update informații contact
3. Adaugă analytics (Google Analytics, Hotjar)
4. Setup auto-email pe form submit
5. Adaugă newsletter signup
6. Optimizează pentru SEO (Google Search Console)

---

## 📞 Suport Rapid

| Problemă | Link |
|----------|------|
| Netlify Help | https://docs.netlify.com |
| GitHub Help | https://docs.github.com |
| HTML/CSS/JS | https://developer.mozilla.org |

---

**Gata! Bravo! 🎉**

Website-ul tău BlackLineSteel e acum live și gata să impresioneze clienții!

Dacă ai întrebări, citeți `README.md` pentru detalii mai aprofundate.
