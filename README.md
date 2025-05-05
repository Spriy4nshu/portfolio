# Priyanshu's Portfolio Website

Interactive personal portfolio website built with Next.js and Framer Motion, featuring 3D animations with Three.js.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Interactive 3D animations using Three.js and React Three Fiber
- Smooth scroll animations with Framer Motion
- Contact form with API endpoint
- Dark mode support

## Tech Stack

- **Next.js** - React framework with App Router
- **TypeScript** - Type safety
- **Framer Motion** - Animation library
- **Three.js** with React Three Fiber - 3D graphics
- **TailwindCSS** - Styling
- **Vercel** - Deployment

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Deployment Instructions for priyanshu.id

### Configure Custom Domain

1. Go to your project on the your domain provider site
2. Navigate to "Settings" → "Domains"
3. Add your domain: `priyanshu.id`
4. Follow Vercel's instructions to update your DNS settings

### 3. DNS Configuration

At your domain registrar (where you purchased priyanshu.id):

1. Add an A record:
   - Name: @
   - Value: (Vercel's IP address or Github Pages etc)

2. Add a CNAME record:
   - Name: www
   - Value: cname.vercel-dns.com.

It may take up to 48 hours for DNS changes to propagate completely.

## GitHub Pages Deployment

This project is configured for deployment on GitHub Pages.

### Setup Instructions:

1. Create a GitHub repository for this project (if you haven't already)
2. Push your code to the GitHub repository
3. In your GitHub repository settings, enable GitHub Pages:
   - Go to Settings > Pages
   - Under "Build and deployment", select "GitHub Actions" as the source
   - GitHub will automatically use the workflow file at `.github/workflows/deploy.yml`

### Manual Deployment:

You can also manually trigger a deployment:

```bash
# Build and export the site
npm run export

# Deploy to GitHub Pages
npm run deploy
```

Note: Make sure to update the "homepage" field in package.json with your actual GitHub username if using github url or replace with your domain before deploying.

