# Harivan Ashram Website Deployment Guide

## Quick Start

### Local Development
1. Open the `index.html` file in your web browser
2. No server required - the website works directly from the file system

### Deployment Options

## Option 1: GitHub Pages (Free & Recommended)

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `harivan-ashram`
3. Make it public (for free hosting)
4. Don't initialize with README (we already have files)

### Step 2: Upload Files
1. Upload all files from the project folder:
   - `index.html`
   - `README.md`
   - `WEBSITE_PLAN.md`
   - `DEPLOYMENT_GUIDE.md`

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Scroll down to "Pages" section
3. Source: Deploy from a branch
4. Branch: `main` and `/ (root)`
5. Click Save

### Step 4: Access Website
Your website will be available at: `https://[username].github.io/harivan-ashram`

## Option 2: Netlify (Free with Custom Domain)

### Step 1: Create Netlify Account
1. Go to [Netlify](https://netlify.com)
2. Sign up with GitHub

### Step 2: Deploy Site
1. Click "New site from Git"
2. Choose GitHub repository
3. Select `harivan-ashram` repository
4. Build settings: No build required (static site)
5. Click "Deploy site"

### Step 3: Custom Domain (Optional)
1. Go to Site settings → Domain management
2. Add custom domain: `harivanashram.org` (or your preferred domain)
3. Update DNS records as instructed

## Option 3: Vercel (Free Hosting)

### Step 1: Create Vercel Account
1. Go to [Vercel](https://vercel.com)
2. Sign up with GitHub

### Step 2: Import Project
1. Click "New Project"
2. Import `harivan-ashram` repository
3. Framework preset: Other
4. Click "Deploy"

## Option 4: Traditional Web Hosting

### Step 1: Choose Hosting Provider
- Hostinger
- Bluehost
- GoDaddy
- Any hosting that supports static files

### Step 2: Upload Files
1. Connect to hosting via FTP or cPanel File Manager
2. Upload `index.html` and other files to public_html directory
3. Set file permissions (644 for files, 755 for directories)

## Custom Domain Setup

### Step 1: Purchase Domain
- Go to domain registrar (GoDaddy, Namecheap, etc.)
- Purchase domain: `harivanashram.org` or similar

### Step 2: DNS Configuration
```
Type: A Record
Name: @
Value: [Hosting Provider IP]

Type: CNAME
Name: www
Value: [Primary Domain]
```

### Step 3: SSL Certificate
- Most providers offer free SSL (Let's Encrypt)
- Enable HTTPS for security

## Image Management

### Current Setup
- Gallery uses placeholder gradients
- Ready for real image uploads

### Adding Real Images
1. Create `images/` folder
2. Add images with descriptive names:
   - `navratri-2025-1.jpg`
   - `shobhayatra-2026-2.jpg`
   - `somnath-darshan-2026.jpg`
3. Update `index.html` image sources:
   ```html
   <img src="images/navratri-2025-1.jpg" alt="Navratri Celebration 2025">
   ```

### Google Drive Integration
For dynamic image updates:
1. Share Google Drive folders publicly
2. Use direct image links
3. Update HTML to use Drive URLs

## Performance Optimization

### Image Optimization
- Compress images before upload (TinyPNG, ImageOptim)
- Use WebP format for better compression
- Implement lazy loading for gallery

### Website Speed
- Enable GZIP compression
- Use CDN for static assets
- Minimize HTTP requests

## SEO Configuration

### Meta Tags Update
Update these in `index.html`:
```html
<meta name="description" content="Harivan Ashram - A nature-oriented spiritual retreat center under The Art of Living, located in Chandigarh">
<meta name="keywords" content="Harivan Ashram, Art of Living, spiritual retreat, meditation, Chandigarh, YLTP">
<meta property="og:title" content="Harivan Ashram - A Nature Retreat">
<meta property="og:description" content="Experience peace and spirituality at Harivan Ashram">
```

### Google Analytics
1. Create Google Analytics account
2. Get tracking code
3. Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Maintenance Tasks

### Weekly
- Check for broken links
- Update event information
- Review contact form submissions

### Monthly
- Add new photos to gallery
- Update course schedules
- Review website analytics

### Quarterly
- Security updates
- Performance optimization
- Content review and updates

## Contact Form Setup

### Option 1: Email Integration
Replace form action with:
```html
<form action="mailto:artoflivingharivanashram@gmail.com" method="post" enctype="text/plain">
```

### Option 2: Third-Party Service
Use services like:
- Formspree
- Netlify Forms
- Getform

### Option 3: Backend Integration
For advanced functionality:
- PHP backend
- Node.js server
- Serverless functions

## Security Considerations

### HTTPS
- Enable SSL certificate
- Redirect HTTP to HTTPS
- Use secure headers

### Content Security Policy
Add to `<head>`:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
```

## Backup Strategy

### Files Backup
- Keep local copy of all files
- Use Git for version control
- Regular backups to cloud storage

### Content Backup
- Document all changes
- Keep backup of contact information
- Save important communications

## Troubleshooting

### Common Issues
1. **Images not loading**: Check file paths and permissions
2. **Form not working**: Verify email configuration or third-party service
3. **Mobile layout issues**: Test on different devices
4. **Slow loading**: Optimize images and enable caching

### Testing Checklist
- [ ] Website loads correctly
- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] Mobile responsive design
- [ ] Images display properly
- [ ] Forms validate input
- [ ] Social media links work

## Next Steps

### Immediate (Week 1)
- Deploy website using chosen method
- Test all functionality
- Share with stakeholders

### Short Term (Month 1)
- Add real images from Google Drive
- Set up Google Analytics
- Configure contact form

### Long Term (Month 3+)
- Add blog/news section
- Implement event registration
- Create mobile app (if needed)

This deployment guide provides multiple options for getting your Harivan Ashram website online, from simple free hosting to advanced custom domain setups.
