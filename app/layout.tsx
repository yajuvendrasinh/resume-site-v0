import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yajuvendrasinh | Data Science Portfolio",
  description: "Professional portfolio showcasing data science projects, technical skills, and professional experience.",
  keywords: ["Data Science", "Portfolio", "Machine Learning", "Yajuvendrasinh", "Projects"],
  authors: [{ name: "Yajuvendrasinh" }],
  creator: "Yajuvendrasinh",
  publisher: "Yajuvendrasinh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/resume-site-v0/hacker.png",
    apple: "/resume-site-v0/hacker.png",
  },
  openGraph: {
    title: "Yajuvendrasinh | Data Science Portfolio",
    description: "Professional portfolio showcasing data science projects, technical skills, and professional experience.",
    url: "https://yajuvendra.xyz",
    siteName: "Yajuvendrasinh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yajuvendrasinh Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yajuvendrasinh | Data Science Portfolio",
    description: "Professional portfolio showcasing data science projects, technical skills, and professional experience.",
    images: ["/og-image.png"],
    creator: "@yajuvendra",
  },
  metadataBase: new URL("https://paranjayy.github.io/resume-site-v0"),
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="portfolio-theme"
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
