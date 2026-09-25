# Deployment Guide - Mara Retreat & Wellness

## 🚀 Vercel Deployment

### Prerequisites
- GitHub repository: https://github.com/CalebBigla/Mara-Retreat-and-Wellness
- Vercel account (sign up at https://vercel.com)

---

## Quick Deploy Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose `CalebBigla/Mara-Retreat-and-Wellness`

3. **Configure Project**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build completion
   - Your site will be live at: `https://mara-retreat-and-wellness.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project directory
cd Mara-Retreat-and-Wellness-main

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## ⚙️ Build Configuration

### Automatic Detection
Vercel will automatically detect:
- ✅ **Framework**: Vite
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `dist`
- ✅ **Node Version**: 18.x or higher

### Manual Configuration (if needed)
In Vercel dashboard → Project Settings → Build & Development Settings:

| Setting | Value |
|---------|-------|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Node Version | 18.x |

---

## 🔧 Environment Variables

Currently, the project doesn't require environment variables. If you need to add them later:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables like:
   - `VITE_API_URL` (if you add a backend)
   - `VITE_ANALYTICS_ID` (for analytics)

**Note**: Vite requires environment variables to be prefixed with `VITE_`

---

## 📁 Project Structure

```
Mara-Retreat-and-Wellness/
├── public/
│   ├── assets/          # Images (12 total)
│   │   ├── luxury-spa.jpg
│   │   ├── massage-session.jpg
│   │   ├── massage-therapy.jpg
│   │   ├── massage-types.jpg
│   │   ├── spa-details.jpg
│   │   ├── spa-hero.jpg
│   │   ├── spa-interior.jpg
│   │   ├── spa-resort.jpg
│   │   ├── spa-room.jpg
│   │   ├── spa-treatment.jpg
│   │   ├── wellness-gift.jpg
│   │   └── wellness-space.jpg
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/      # React components
│   ├── data/           # Static data
│   ├── pages/          # Page components
│   ├── services/       # Service logic
│   ├── styles.css      # Global styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── vercel.json         # Vercel routing config
└── package.json        # Dependencies
```

---

## 🔄 Routing Configuration

### vercel.json
The `vercel.json` file ensures all routes redirect to `index.html` for client-side routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This allows React Router to handle all routes:
- `/` - Home
- `/about` - About page
- `/massages` or `/services` - Services listing
- `/massages/:slug` - Service details
- `/gallery` - Gallery
- `/contact` - Contact
- `/book` - Booking page
- `/admin/*` - Admin pages

---

## 🎯 Expected Build Output

```
✓ 1762 modules transformed
✓ built in 15s

dist/
├── index.html (1.05 kB)
├── assets/
│   ├── index-[hash].css (90.37 kB)
│   └── index-[hash].js (329.77 kB)
└── (images copied from public/)
```

---

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] Home page loads correctly
- [ ] All images are visible
- [ ] Navigation works (navbar, footer links)
- [ ] Massage services page displays all 13 services
- [ ] Each service has a unique image
- [ ] Service detail pages load correctly
- [ ] Gallery shows 9 images
- [ ] About page loads with content
- [ ] Contact information is visible
- [ ] WhatsApp links work
- [ ] Booking page is accessible
- [ ] Mobile responsive design works
- [ ] All fonts load (Manrope & Cormorant Garamond)
- [ ] Animations work smoothly
- [ ] No console errors

---

## 🔗 Useful Links

- **Your Repository**: https://github.com/CalebBigla/Mara-Retreat-and-Wellness
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel Documentation**: https://vercel.com/docs
- **Vite Documentation**: https://vitejs.dev

---

## 🚨 Troubleshooting

### Build Fails
**Issue**: Build command fails
**Solution**: 
- Check Node version (should be 18.x or higher)
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

### Images Not Loading
**Issue**: Images show broken/404
**Solution**: 
- Verify images are in `public/assets/` directory
- Check image paths use `/assets/` (with leading slash)
- Ensure image files are committed to Git

### Routes Return 404
**Issue**: Direct navigation to routes fails
**Solution**: 
- Verify `vercel.json` exists with rewrite rules
- Check React Router setup in `App.jsx`

### Styles Not Applying
**Issue**: Website looks unstyled
**Solution**: 
- Verify Tailwind CSS is configured
- Check `src/styles.css` is imported in `main.jsx`
- Ensure Google Fonts are loading in `index.html`

---

## 📞 Support

For deployment issues:
- Check Vercel build logs
- Review project settings in Vercel dashboard
- Consult Vercel documentation
- Check GitHub repository for latest commits

---

## 🎉 Success!

Once deployed, your site will be available at:
- **Production URL**: `https://mara-retreat-and-wellness.vercel.app`
- **Custom Domain** (optional): Configure in Vercel dashboard

Share your beautiful spa website with the world! 🌍✨

---

**Last Updated**: September 25, 2026
**Status**: ✅ Ready for deployment
