# 🚀 GitHub Pages Deployment Guide - BlackLineSteel

Complete step-by-step guide to deploy your website to GitHub Pages and connect it with your custom domain.

---

## 📋 PART 1: Setup GitHub Repository & Deploy

### **Step 1: Create a GitHub Repository**

1. Go to **https://github.com/new**
2. **Repository name**: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
   - This special naming is required for GitHub Pages user/organization sites
3. **Description**: "BlackLineSteel - Industrial metal furniture presentation website"
4. **Visibility**: Select **Public** (GitHub Pages requires public repos)
5. ❌ Uncheck "Add a README file" (you already have one)
6. Click **Create repository**

> **IMPORTANT**: Use the exact naming convention `username.github.io` for the site to work properly.

---

### **Step 2: Upload Files to GitHub**

#### **Option A: Using Git (Recommended)**

1. Open Terminal/Command Prompt in your project folder:
   ```bash
   cd path/to/black-line-steel
   ```

2. Initialize Git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - BlackLineSteel website"
   git branch -M main
   ```

3. Add remote repository (replace `yourusername`):
   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

#### **Option B: Using GitHub Web Interface**

1. Go to your new repository on GitHub
2. Click the green **Code** button → **Upload files**
3. Drag and drop your entire `black-line-steel` folder
4. Click **Commit changes**

---

### **Step 3: Enable GitHub Pages**

1. Go to your repository: `https://github.com/yourusername/yourusername.github.io`
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Click **Save**

> GitHub will automatically deploy your site to: **https://yourusername.github.io**

---

## 🌐 PART 2: Connect Your Custom Domain

### **Step 1: Configure DNS Settings at Your Domain Registrar**

You need to add DNS records that point your custom domain to GitHub Pages servers.

#### **For Apex Domain** (e.g., `yourdomain.com`):

Add these **A records** to your DNS settings:

| Type | Name | Value |
|------|------|-------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

#### **For Subdomain** (e.g., `www.yourdomain.com`):

Add this **CNAME record**:

| Type  | Name | Value |
|-------|------|-------|
| CNAME | www  | yourusername.github.io |

> **How to add DNS records**:
> 1. Log in to your domain registrar (GoDaddy, Namecheap, Route53, etc.)
> 2. Go to DNS/Domain Settings
> 3. Add the records above
> 4. Save changes (takes 5-48 hours to propagate)

---

### **Step 2: Add Domain to GitHub Repository**

1. Go to your repository Settings → **Pages**
2. Under "Custom domain", enter your domain (e.g., `yourdomain.com`)
3. Click **Save**
4. ✅ GitHub will automatically create a `CNAME` file in your repository

> If you see a warning about DNS not being configured, wait 5-15 minutes and refresh. DNS changes take time to propagate.

---

### **Step 3: Enable HTTPS (Recommended)**

1. Go back to repository Settings → **Pages**
2. Check the box: ✅ **"Enforce HTTPS"**
3. Wait for the certificate to be issued (usually 5-10 minutes)

> Your site is now secure at `https://yourdomain.com`

---

## 🔄 UPDATING YOUR WEBSITE

After your initial setup, updating your site is easy:

### **Using Git:**
```bash
# Make your changes locally
git add .
git commit -m "Update content"
git push origin main
```

GitHub will automatically deploy the changes within 1-2 minutes.

### **Using GitHub Web Interface:**
1. Go to your repository
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Commit directly to `main` branch
6. Changes deploy automatically

---

## ✅ VERIFICATION CHECKLIST

- [ ] Repository is named `yourusername.github.io`
- [ ] Repository is set to **Public**
- [ ] Files are pushed to the `main` branch
- [ ] GitHub Pages is enabled (Settings → Pages)
- [ ] Site is live at `https://yourusername.github.io`
- [ ] Custom domain DNS records are added
- [ ] Custom domain is configured in GitHub (Settings → Pages)
- [ ] HTTPS is enabled
- [ ] Custom domain resolves to your site (wait 5-48 hours if not)

---

## 🆘 TROUBLESHOOTING

### **Site not showing at `yourusername.github.io`**
- Check that the repository name is exactly `yourusername.github.io`
- Verify GitHub Pages is enabled in Settings → Pages
- Ensure the `main` branch is selected
- Wait a few minutes and hard refresh (Ctrl+Shift+R)

### **Custom domain not working**
- Verify DNS records are correctly added at your registrar
- Wait 5-48 hours for DNS propagation
- Check that the domain is entered correctly in GitHub (Settings → Pages)
- Use online DNS checker: https://mxtoolbox.com/

### **HTTPS not working**
- Wait 10-15 minutes for certificate issuance
- Disable and re-enable "Enforce HTTPS"
- Verify custom domain DNS is properly configured

### **404 errors on pages**
- Ensure you're using correct relative paths in links (use `/` not `./`)
- GitHub Pages serves from the repository root

---

## 📊 Performance Notes

- GitHub Pages uses Cloudflare's edge network (very fast worldwide)
- HTTPS is automatic and free
- No bandwidth limits for public repositories
- Changes deploy within 1-2 minutes

---

## 🎯 QUICK REFERENCE

| What | Where |
|------|-------|
| Your site (no custom domain) | `https://yourusername.github.io` |
| Your site (with custom domain) | `https://yourdomain.com` |
| Repository URL | `https://github.com/yourusername/yourusername.github.io` |
| Deploy new changes | `git push origin main` |
| Update DNS records | Your domain registrar's dashboard |
| Configure custom domain | GitHub repo Settings → Pages |

---

**You're all set! 🎉 Your website is now hosted on GitHub Pages with your custom domain.**
