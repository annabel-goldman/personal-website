# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio site to GitHub Pages using GitHub Actions.

## Prerequisites

- Your code is in the `Portfolio-V3` folder
- You have a GitHub repository at `https://github.com/annabel-goldman/website.git`

## Setup Steps

### 1. Initialize Git and Connect to Repository

Run these commands in your terminal from the `Portfolio-V3` directory:

```bash
# Navigate to your project directory
cd Portfolio-V3

# Initialize git (if not already done)
git init

# Add your GitHub repository as remote
git remote add origin https://github.com/annabel-goldman/website.git

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit with GitHub Pages setup"

# Push to main branch
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository: https://github.com/annabel-goldman/website
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The GitHub Action will automatically deploy your site

### 3. Verify Deployment

After pushing your code:
1. Go to the **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Once completed, your site will be available at: `https://annabel-goldman.github.io/website`

## How It Works

- The GitHub Action triggers on every push to the `main` branch
- It builds your Next.js project with static export
- The built files are deployed to GitHub Pages
- Your site will be accessible at `https://annabel-goldman.github.io/website`

## Troubleshooting

- If the build fails, check the Actions tab for error messages
- Make sure all dependencies are properly listed in `package.json`
- Verify that the `basePath` in `next.config.js` matches your repository name

## Local Development

To test locally before deploying:

```bash
npm run dev
```

To build locally:

```bash
npm run build
```

The built files will be in the `out` directory. 