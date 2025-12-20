import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { GoogleAnalytics } from "@next/third-parties/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yajuvendrasinh | Data Science Portfolio",
  description: "Professional portfolio showcasing projects and experience in Data Science and Business Analysis. Specialist in Python, SQL, and BI.",
  metadataBase: new URL("https://yajuvendra.xyz"), // Placeholder - update if domain is different
  openGraph: {
    title: "Yajuvendrasinh | Data Science Portfolio",
    description: "Results-oriented professional blending data science expertise with business acumen to drive growth.",
    url: "https://yajuvendra.xyz",
    siteName: "Yajuvendrasinh's Portfolio",
    images: [
      {
        url: "https://yajuvendra.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yajuvendrasinh - Data Science Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yajuvendrasinh | Data Science Portfolio",
    description: "Professional portfolio showcasing projects and experience in Data Science.",
    images: [
      {
        url: "https://yajuvendra.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yajuvendrasinh - Data Science Portfolio",
      },
    ],
  },
  icons: {
    icon: "/hacker.png",
  },
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
          <GoogleAnalytics gaId="G-LEEZWEPVV2" />
        </ThemeProvider>
      </body>
    </html>
  )
}
