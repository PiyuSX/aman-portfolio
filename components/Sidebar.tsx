"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Home, User, Wrench, FolderGit2, BriefcaseIcon, MailIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Wrench },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Experience", href: "#experience", icon: BriefcaseIcon },
  { name: "Contact", href: "#contact", icon: MailIcon },
]

export function Sidebar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.querySelector(item.href))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  // ✅ Fixed MobileNav - Removed duplicate "X"
  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden fixed top-4 right-4 text-white z-50">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] bg-background p-0">
        <div className="flex flex-col h-full">
          {/* Header (Removed extra X button) */}
          <div className="flex justify-between items-center p-4 border-b border-border">
            <span className="text-xl font-bold text-primary">Aman</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4">
            {navItems.map((item) => (
              <SheetClose asChild key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`flex items-center gap-3 px-4 py-3 text-lg transition-colors hover:text-primary ${
                    activeSection === item.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </a>
              </SheetClose>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <div className="p-4 border-t border-border flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="text-muted-foreground hover:text-primary"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />)}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )

  const DesktopNav = () => (
    <aside className="fixed left-0 top-0 h-full w-20 bg-background flex flex-col justify-between py-8 z-40 hidden md:flex border-r border-border">
      <div className="flex flex-col h-full">
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </div>
        <nav className="flex-1 flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`group flex items-center justify-center w-full py-6 transition-colors hover:text-primary ${
                activeSection === item.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <span className="transform -rotate-90 text-sm font-medium whitespace-nowrap">
                {item.name}
              </span>
            </a>
          ))}
        </nav>
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="text-muted-foreground hover:text-primary"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />)}
          </Button>
        </div>
      </div>
    </aside>
  )

  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  )
}
