# Resume Site Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional layout
- **Responsive**: Works on all devices and screen sizes
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Built with Next.js best practices
- **GitHub Pages Ready**: Static export for easy deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI & Custom Components
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📂 Project Structure

```
resume-site-v0/
├── app/                 # Next.js app directory
├── components/          # React components
├── public/             # Static assets
├── styles/             # Global styles
├── .github/workflows/  # GitHub Actions
└── README.md
```

## 🏃‍♂️ Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**: Navigate to `http://localhost:3000`

## 📦 Building for Production

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Test the build locally**:
   ```bash
   npm run start
   ```

## 🚀 Deploying to GitHub Pages

### Automatic Deployment (Recommended)

1. **Create a new GitHub repository**

2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

4. **Update configuration** (if needed):
   - Uncomment and update `basePath` and `assetPrefix` in `next.config.mjs`
   - Replace `/resume-site-v0` with your actual repository name

### Manual Deployment

Run the deployment script:

**On Windows (PowerShell)**:
```powershell
.\deploy.ps1
```

**On macOS/Linux**:
```bash
chmod +x deploy.sh
./deploy.sh
```

## 🔧 Configuration

### For GitHub Pages Deployment

Update `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/your-repo-name',        // Replace with your repo name
  assetPrefix: '/your-repo-name',     // Replace with your repo name
  // ... other config
}
```

### Environment Variables

No environment variables are required for basic functionality.

## 📝 Customization

1. **Personal Information**: Update components with your details
2. **Projects**: Modify `components/projects.tsx`
3. **Skills**: Update `components/skills.tsx`
4. **Experience**: Edit `components/experience.tsx`
5. **Styling**: Customize Tailwind classes in components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have any questions or need help with deployment, please open an issue.

---

**Built with ❤️ using Next.js and Tailwind CSS** 