"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { usePathname } from "next/navigation"
import type React from "react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const [isInitialized, setIsInitialized] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Get all sections
      const sections = navItems
        .map((item) => ({
          id: item.href.replace("#", ""),
          element: document.getElementById(item.href.replace("#", "")),
        }))
        .filter((section) => section.element)

      // Find the current section
      const scrollPosition = window.scrollY + 80 // Reduced offset for smaller navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Initialize on mount
    setTimeout(() => {
      handleScroll()
      setIsInitialized(true)
    }, 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Update indicator position when active section changes
    if (navRef.current && isInitialized) {
      const activeLink = navRef.current.querySelector(`[data-section="${activeSection}"]`) as HTMLElement
      if (activeLink) {
        const navContainer = navRef.current
        const containerRect = navContainer.getBoundingClientRect()
        const linkRect = activeLink.getBoundingClientRect()

        setIndicatorStyle({
          left: linkRect.left - containerRect.left,
          width: linkRect.width,
        })
      }
    }
  }, [activeSection, isInitialized])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tighter transition-colors">
              Portfolio
            </Link>
          </div>

          {/* Desktop and Landscape Mobile Navigation */}
          <div className="hidden landscape:flex md:flex">
            <div className="ml-10 flex items-center space-x-2 relative" ref={navRef}>
              {/* Animated indicator - hidden when contact is active */}
              <div
                className={`absolute top-0 h-full bg-primary/20 rounded-md transition-all duration-500 ease-out border-2 border-primary/40 ${
                  isInitialized && activeSection !== "contact" ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  transform: "translateZ(0)", // Hardware acceleration
                }}
              />

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  data-section={item.href.replace("#", "")}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-300 ease-in-out relative z-10 ${
                    item.name === "Contact"
                      ? `glow-on-hover ${activeSection === "contact" ? "active-contact" : ""}`
                      : ""
                  } ${activeSection === item.href.replace("#", "") ? "text-primary" : "hover:text-foreground"}`}
                >
                  {item.name}
                </Link>
              ))}
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Portrait Navigation */}
          <div className="flex items-center gap-2 landscape:hidden md:hidden relative" ref={dropdownRef}>
            <ModeToggle />
            <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setIsOpen(!isOpen)}>
              <span className="sr-only">Open menu</span>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* Small Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full right-0 mt-2 w-44 bg-background border border-border rounded-md shadow-lg z-50">
                <div className="py-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block px-3 py-2 text-sm font-medium rounded-md mx-2 my-1 transition-all duration-300 ease-in-out relative ${
                        item.name === "Contact"
                          ? `glow-on-hover ${activeSection === "contact" ? "active-contact" : ""}`
                          : ""
                      } ${
                        activeSection === item.href.replace("#", "") && item.name !== "Contact"
                          ? "text-primary bg-primary/20 border-2 border-primary/40"
                          : "hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
