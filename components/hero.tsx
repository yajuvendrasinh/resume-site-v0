"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0" />
      <div className="container relative z-10 px-4 mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Hi, I&apos;m</span>
          <span className="block mt-2 text-primary">Yajuvendrasinh Gida</span>
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-xl text-muted-foreground sm:max-w-3xl md:max-w-4xl whitespace-nowrap">
          Blending Data Science Expertise with Business Acumen to Drive Growth
        </p>
        <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
          <Button asChild size="lg">
            <Link href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
              View My Work
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" onClick={(e) => handleNavClick(e, "#about")}>
          <Button variant="ghost" size="icon" aria-label="Scroll down">
            <ArrowDown className="w-6 h-6" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
