# experiment--gh-pages-actions

This repository was created to experiment with deploying a React (Vite) project to GitHub Pages using **GitHub Actions**.

## What I tried
- Added a custom workflow (`.github/workflows/deploy.yml`)
- Configured build and deploy jobs with permissions
- Added a step to copy `index.html` → `404.html` for SPA routing
- Tested React Router with `basename={import.meta.env.BASE_URL}`

## What I learned
- GitHub Actions allows automated builds and deployments on push
- Deployment can happen naturally when merging to main, which feels closer to real-world workflows
- GitHub Pages always serves static files, so SPA routing needs the 404.html hack
- For production-like apps, Vercel or Firebase Hosting are better suited
