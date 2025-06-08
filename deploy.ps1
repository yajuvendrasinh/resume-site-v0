Write-Host "Building the Next.js application..." -ForegroundColor Green
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Creating .nojekyll file to prevent Jekyll processing..." -ForegroundColor Green
    New-Item -Path "out\.nojekyll" -ItemType File -Force | Out-Null
    
    Write-Host "Build completed successfully!" -ForegroundColor Green
    Write-Host "The 'out' directory contains your static site ready for GitHub Pages." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "To deploy manually:" -ForegroundColor Cyan
    Write-Host "1. Create a new repository on GitHub" -ForegroundColor White
    Write-Host "2. Enable GitHub Pages in repository settings" -ForegroundColor White
    Write-Host "3. Set source to 'GitHub Actions'" -ForegroundColor White
    Write-Host "4. Push this code to your repository" -ForegroundColor White
    Write-Host "5. The GitHub Action will automatically deploy your site" -ForegroundColor White
} else {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
} 