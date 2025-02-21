"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects")
      if (!section) return

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Show when more than 40% of "Projects" is in view, hide when scrolled away
      setIsVisible(rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.3)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="projects" className="relative py-16 md:py-24 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Future Projects</CardTitle>
                <CardDescription className="text-muted-foreground">
                  As a Computer Science student, I'm excited to start building innovative projects!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Currently, I'm focusing on mastering web development technologies like React, Next.js, and JavaScript.
                  Stay tuned for exciting projects coming soon as I apply my skills to real-world applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                    React
                  </span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                    JavaScript
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">What's Next?</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Exploring ideas and planning my first big project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  I’m brainstorming concepts like task managers, personal portfolios, or small utility apps to showcase
                  my growing skills. Check back soon for updates!
                </p>
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  variant="outline"
                  onClick={() => alert("Stay tuned for project updates!")}
                >
                  Stay Updated
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Rotated "PROJECTS" title with animation */}
      <motion.div
        className="hidden lg:block absolute left-[-75px] top-1/2 z-20"
        initial={{ x: -100, opacity: 0, rotate: -90 }}
        animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0, rotate: -90 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold text-foreground">PROJECTS</h2>
      </motion.div>
    </section>
  )
}