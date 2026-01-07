# GitHub Pages Deployment Guide
## Dorset Spray Plastering & Painting Website

⚠️ **IMPORTANT LIMITATIONS:**
- GitHub Pages only hosts the FRONTEND (React app)
- Contact form will NOT send emails (shows success message but doesn't actually send)
- No backend functionality will work
- This is only suitable for showcasing the design, not a functional website

---

## Prerequisites

1. A GitHub account (sign up at https://github.com if you don't have one)
2. Git installed on your computer
3. Your website files (already prepared in /app/frontend)

---

## Step-by-Step Deployment Instructions

### Step 1: Update package.json with Your GitHub Info

**BEFORE deploying**, edit `/app/frontend/package.json` and replace this line:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME",
```

With your actual GitHub username and repository name. For example:

```json
"homepage": "https://johnsmith.github.io/dorset-plastering",
```

### Step 2: Create a GitHub Repository

1. Go to https://github.com
2. Click the **"+"** button in the top right
3. Click **"New repository"**
4. Fill in:
   - **Repository name**: `dorset-plastering` (or whatever you want)
   - **Description**: "Dorset Spray Plastering & Painting Website"
   - **Public** or **Private**: Choose Public
   - **DO NOT** initialize with README, .gitignore, or license
5. Click **"Create repository"**
6. Copy the repository URL (looks like: `https://github.com/YOUR_USERNAME/dorset-plastering.git`)

### Step 3: Initialize Git and Push Your Code

Run these commands from your computer terminal:

```bash
# Navigate to the frontend directory
cd /app/frontend

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit - Dorset Plastering website"

# Add your GitHub repository as remote (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

**Note:** If you get an error about "main" branch, try:
```bash
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

From the `/app/frontend` directory, run:

```bash
cd /app/frontend
npm run deploy
```

Or if using yarn:

```bash
cd /app/frontend
yarn deploy
```

This will:
1. Build your React app for production
2. Create a `gh-pages` branch
3. Deploy to GitHub Pages
4. Takes 2-5 minutes

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: **gh-pages**
   - Folder: **/ (root)**
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

### Step 6: View Your Website

Your website will be live at:
```
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME
```

For example: `https://johnsmith.github.io/dorset-plastering`

---

## Troubleshooting Common Issues

### Issue 1: 404 Error - Page Not Found

**Cause:** Router not configured for GitHub Pages subdirectory

**Solution:** If deploying to a repository (not username.github.io), update `/app/frontend/src/App.js`:

```javascript
<BrowserRouter basename="/YOUR_REPOSITORY_NAME">
```

For example:
```javascript
<BrowserRouter basename="/dorset-plastering">
```

### Issue 2: Blank Page

**Cause:** Incorrect homepage in package.json

**Solution:** Make sure your `homepage` in package.json matches exactly:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

### Issue 3: Images Not Loading

**Cause:** Asset paths incorrect

**Solution:** All images should use absolute URLs (which yours already do with the customer-assets links)

### Issue 4: Contact Form Doesn't Work

**Expected:** This is normal - GitHub Pages has no backend. The form will show a success message but won't actually send emails.

---

## Updating Your Website

After making changes to your website:

```bash
cd /app/frontend

# Add changes
git add .

# Commit changes
git commit -m "Update website content"

# Push to GitHub
git push origin main

# Deploy updated version to GitHub Pages
npm run deploy
```

Wait 1-2 minutes and refresh your browser to see updates.

---

## Alternative: Deploy to Emergent (Recommended for Full Functionality)

If you need the contact form to work and want full backend functionality:

1. Use Emergent's "Deploy" button
2. Click "Deploy Now"
3. Wait 10-15 minutes
4. Get a fully functional live URL with working backend
5. Cost: 50 credits/month

---

## What Works on GitHub Pages vs Emergent

| Feature | GitHub Pages | Emergent Deploy |
|---------|--------------|-----------------|
| Frontend Display | ✅ Yes | ✅ Yes |
| Navigation | ✅ Yes | ✅ Yes |
| Images/Videos | ✅ Yes | ✅ Yes |
| Contact Form | ❌ Mock only | ✅ Fully functional |
| Email Sending | ❌ No | ✅ Yes |
| Backend API | ❌ No | ✅ Yes |
| Database | ❌ No | ✅ Yes |
| Custom Domain | ✅ Yes (manual setup) | ✅ Yes (easy setup) |

---

## Quick Reference Commands

```bash
# Build for production
cd /app/frontend && npm run build

# Deploy to GitHub Pages
cd /app/frontend && npm run deploy

# Check deployment status
git log --oneline gh-pages

# View local build
cd /app/frontend/build && python3 -m http.server 8000
# Then visit: http://localhost:8000
```

---

## Support

If you encounter issues:
1. Check GitHub repository settings → Pages
2. Verify the gh-pages branch exists
3. Make sure homepage in package.json is correct
4. Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
5. Check browser console for errors (F12)

---

## Summary

✅ **GitHub Pages is good for:**
- Showcasing website design
- Portfolio presentations
- Static website demos
- Free hosting

❌ **GitHub Pages is NOT good for:**
- Functional contact forms
- Backend features
- Database storage
- Email sending

For a fully functional business website with working contact form, use **Emergent's deployment** instead.
