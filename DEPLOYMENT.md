# AL FATEH Development & Deployment Guide

## Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Deploy to Cloudflare Workers
bun wrangler deploy
```

---

## Environment Setup

### 1. Local Development

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
cp .dev.vars .dev.vars
```

Edit with your values:

```env
VITE_SENDGRID_API_KEY=SG.xxxxx
ADMIN_EMAIL=admin@alfateh.ci
ADMIN_PASSWORD=your_secure_password
```

### 2. Cloudflare Workers Setup

#### Create KV Namespaces

```bash
# Assets storage
bun wrangler kv:namespace create "ASSETS"
bun wrangler kv:namespace create "ASSETS" --preview

# Contact form submissions
bun wrangler kv:namespace create "CONTACT_FORMS"
bun wrangler kv:namespace create "CONTACT_FORMS" --preview
```

#### Create R2 Bucket

```bash
# Media bucket for images
bun wrangler r2 bucket create alfateh-media
bun wrangler r2 bucket create alfateh-media-dev
```

#### Update wrangler.jsonc

Replace placeholders:

```jsonc
{
  "account_id": "your_account_id_from_dashboard",
  "kv_namespaces": [
    {
      "binding": "ASSETS",
      "id": "your_kv_id",
      "preview_id": "your_preview_kv_id"
    }
  ],
  "r2_buckets": [
    {
      "binding": "MEDIA",
      "bucket_name": "alfateh-media"
    }
  ]
}
```

---

## Features

### 🔐 Admin Panel

**URL**: `/admin`  
**Login Page**: `/admin/login`

#### Default Credentials

```
Email: admin@alfateh.ci
Password: (set ADMIN_PASSWORD env var)
```

#### Admin Features

1. **Image Gallery** (`/admin/gallery`)
   - Upload images via drag-drop
   - Auto-upload to Cloudflare R2
   - Delete images
   - View upload history

2. **Settings** (`/admin/settings`)
   - Website configuration
   - SEO settings
   - Email templates

3. **Contact Forms** (`/admin/forms`)
   - View all submissions
   - Filter by type
   - Export to CSV

4. **Analytics** (`/admin/analytics`)
   - Traffic insights
   - Visitor statistics
   - Popular pages

5. **Users** (`/admin/users`)
   - Manage admin accounts
   - Set permissions
   - View activity logs

### 📝 Contact Forms

Pages with forms:
- `/contact` (buyers & brands)
- Form data submitted to `/api/contact/submit`
- Emails sent via SendGrid
- Data stored in Cloudflare KV

### 🖼️ Image Management

- **Upload**: Drag-drop or select in admin gallery
- **Storage**: Cloudflare R2 (CDN-backed)
- **URL Pattern**: `https://media.alfateh.ci/{id}.{ext}`
- **Deletion**: Delete from admin panel (removes from R2 & KV)

---

## API Endpoints

### Public Endpoints

```
POST /api/contact/submit
  Payload: {
    type: "acheteur" | "marque",
    name: string,
    email: string,
    company: string,
    message: string,
    ...other fields
  }
  Response: { success: true, emailSent: boolean }
```

### Admin Endpoints (Require Token)

```
POST /api/admin/login
  Payload: { email, password }
  Response: { token, name, email }

POST /api/admin/upload
  Headers: { X-Admin-Token: "token" }
  Body: FormData { file, name }
  Response: { id, name, url, size, uploadedAt }

DELETE /api/admin/delete/{id}
  Headers: { X-Admin-Token: "token" }
  Response: { success: true, id }
```

---

## Secrets & Environment Variables

### GitHub Secrets (for CI/CD)

Set these in `Settings → Secrets and variables → Actions`:

```
CF_API_TOKEN              # Cloudflare API token
CF_ACCOUNT_ID             # Your account ID
SENDGRID_API_KEY          # SendGrid API key
ADMIN_EMAIL               # Admin email for login
ADMIN_PASSWORD            # Admin password (strong!)
```

### Cloudflare Workers Secrets

Set via Wrangler:

```bash
bun wrangler secret put SENDGRID_API_KEY
bun wrangler secret put ADMIN_PASSWORD
```

Or in Cloudflare Dashboard → Workers → your-app → Settings → Environment Variables

---

## Deployment

### Manual Deployment

```bash
# Build
bun run build

# Deploy to production
bun wrangler deploy

# Deploy to specific environment
bun wrangler deploy --env staging
```

### Automatic Deployment (GitHub Actions)

1. Push to `main` branch
2. GitHub Actions runs:
   - Install dependencies
   - Run linting & type checks
   - Build
   - Deploy to Cloudflare Workers

View status: GitHub → Actions tab

---

## Custom Domain Setup

### 1. Add Domain to Cloudflare

1. Add domain to Cloudflare (via dashboard)
2. Update nameservers at registrar
3. Wait for domain to be active

### 2. Update wrangler.jsonc

```jsonc
{
  "routes": [
    { "pattern": "alfateh.ci/*", "zone_name": "alfateh.ci" },
    { "pattern": "www.alfateh.ci/*", "zone_name": "alfateh.ci" }
  ]
}
```

### 3. Deploy

```bash
bun wrangler deploy
```

---

## Production Checklist

- [ ] Set all environment variables on Cloudflare
- [ ] Update admin credentials (change default password)
- [ ] Configure SendGrid API key
- [ ] Test contact form submissions
- [ ] Verify all images load from CDN
- [ ] Test admin login & image upload
- [ ] Enable HTTPS (automatic with Cloudflare)
- [ ] Set up monitoring/logging
- [ ] Configure email forwarding
- [ ] Backup database (if applicable)

---

## Troubleshooting

### 500 Error on Deployment

```bash
# Check build
bun run build

# Test locally
bun dev

# Check wrangler config
bun wrangler publish --dry-run
```

### Images Not Uploading

1. Check R2 bucket exists: `bun wrangler r2 bucket list`
2. Verify SendGrid API key set
3. Check browser console for errors
4. Verify admin token in localStorage

### Email Not Sending

1. Verify SendGrid API key: `echo $SENDGRID_API_KEY`
2. Check spam folder
3. Verify sender domain authorized in SendGrid
4. Check contact form data payload

### Admin Login Not Working

1. Verify credentials match env vars
2. Clear browser localStorage
3. Check API endpoint returns 200
4. Test locally first: `bun dev`

---

## Performance Optimization

### Cloudflare Settings

1. **Caching**: Enable on Cloudflare dashboard
2. **Compression**: Enable Brotli
3. **Minification**: Enable JS/CSS/HTML
4. **Image Optimization**: Polish enabled
5. **Cache Rules**: Set for `/api` → bypass

### Frontend

- Images served from R2 (CDN-backed)
- CSS/JS minified by Vite
- Tailwind CSS purged in production
- No unused dependencies

---

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes
git add .
git commit -m "feat: description"

# Push to GitHub
git push origin feature/my-feature

# Create Pull Request on GitHub
# → CI runs automatically
# → Merge when green

# Delete branch
git branch -D feature/my-feature
```

---

## Support

- **Docs**: See `README.md`
- **Issues**: GitHub Issues tab
- **Email**: contact@alfateh.ci
- **Slack**: (if applicable)

---

**Last Updated**: June 2026
