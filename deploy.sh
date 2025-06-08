#!/bin/bash

echo "Building the Next.js application..."
npm run build

echo "Creating .nojekyll file to prevent Jekyll processing..."
touch out/.nojekyll

echo "Build completed successfully!"
echo "The 'out' directory contains your static site ready for GitHub Pages."
echo ""
echo "To deploy manually:"
echo "1. Create a new repository on GitHub"
echo "2. Enable GitHub Pages in repository settings"
echo "3. Set source to 'GitHub Actions'"
echo "4. Push this code to your repository"
echo "5. The GitHub Action will automatically deploy your site" 