# Yajuvendrasinh Gida - Portfolio Website

🌐 **Live Site**: [https://yajuvendra.xyz](https://yajuvendra.xyz)

📎 **GitHub Pages**: [https://yajuvendrasinh.github.io/resume-site-v0/](https://yajuvendrasinh.github.io/resume-site-v0/)

A modern, responsive portfolio website showcasing my expertise in Data Science and Business Analysis. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 👨‍💻 About Me

Results-oriented professional blending **Data Science** expertise with **Business Acumen** to drive growth. I focus on uncovering meaningful insights and translating them into impactful business strategies through statistical analysis, machine learning, and data visualization.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Mode**: Theme toggle for user preference
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Static export optimized for speed
- **SEO Friendly**: Built with Next.js best practices
- **Contact Form**: Integrated with Formspree for easy communication
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 📑 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Eye-catching introduction with call-to-action buttons |
| **About** | Professional summary with downloadable resume |
| **Projects** | Featured data science and analysis projects |
| **Experience** | Professional journey and achievements |
| **Skills** | Technical and soft skills with proficiency levels |
| **Contact** | Contact information and message form |

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | Next.js 15 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Components** | Radix UI, shadcn/ui |
| **Theming** | next-themes |
| **Icons** | Lucide React |
| **Form Handling** | Formspree |
| **Deployment** | GitHub Pages |

## 📊 Featured Projects

- **Chicago Bike Share Data Analysis** - Analyzed 6M+ records using Python and Tableau
- **Global Press Freedom Analysis** - Data analysis on press freedom trends (2014-2023)
- **Music Store Analysis With SQL** - Database analysis for business optimization
- **Student Habits & Academic Performance** - ML analysis using regression and clustering
- **Diabetes Prediction Model** - Random Forest classifier with ~97.1% accuracy

## 🎯 Skills Highlighted

- **Programming & Analytics**: Python, SQL, R, Regex, Power Query
- **Data Visualization & BI**: Tableau, Power BI, Matplotlib, Seaborn, Plotly
- **Data Handling**: EDA, Data Cleaning, Web Scraping, Validation
- **Machine Learning**: Classification, Model Evaluation, Feature Engineering
- **Tools & Platforms**: Jupyter, Git/GitHub, Trello, Asana

## 📂 Project Structure

```
resume-site/
├── app/                 # Next.js app directory
│   ├── layout.tsx       # Root layout with theme provider
│   └── page.tsx         # Main page component
├── components/          # React components
│   ├── hero.tsx         # Hero section
│   ├── about.tsx        # About section with profile
│   ├── projects.tsx     # Projects showcase
│   ├── experience.tsx   # Work experience timeline
│   ├── skills.tsx       # Skills with progress bars
│   ├── contact.tsx      # Contact form and info
│   ├── footer.tsx       # Footer with social links
│   ├── navbar.tsx       # Navigation bar
│   └── ui/              # Reusable UI components
├── public/              # Static assets
│   └── images/          # Project and profile images
├── styles/              # Global styles
├── .github/workflows/   # GitHub Actions for deployment
└── README.md
```

## 🏃‍♂️ Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yajuvendrasinh/resume-site-v0.git
   cd resume-site-v0
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open browser**: Navigate to `http://localhost:3000`

## 📦 Building for Production

```bash
# Build the application
npm run build

# Test the production build locally
npm run start
```

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages when you push to the `main` branch via GitHub Actions workflow.

### Manual Deployment

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

### GitHub Pages Setup

1. Go to repository **Settings** → **Pages**
2. Set source to **GitHub Actions**
3. Configure `next.config.mjs` if using a custom base path:

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name',
}
```

## 📝 Customization

| Area | File |
|------|------|
| Personal Info | `components/hero.tsx`, `components/about.tsx` |
| Projects | `components/projects.tsx` |
| Experience | `components/experience.tsx` |
| Skills | `components/skills.tsx` |
| Contact Details | `components/contact.tsx` |
| Styling | `tailwind.config.ts`, `styles/globals.css` |

## 📫 Contact

- **Email**: gidayajuvendrasinh@gmail.com
- **LinkedIn**: [linkedin.com/in/yajuvendrasinh](https://www.linkedin.com/in/yajuvendrasinh/)
- **Location**: Gujarat, India 🇮🇳

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Yajuvendrasinh Gida using Next.js and Tailwind CSS**
