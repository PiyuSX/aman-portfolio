"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about")
      if (!aboutSection) return

      const rect = aboutSection.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Show when more than 40% of "About" is in view, hide when scrolled up
      setIsVisible(rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.3)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="about" className="relative min-h-screen flex items-center bg-background text-foreground">
      <div className="container px-4 md:px-6 py-24">
        <div className="grid gap-6 items-center md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Aman Shah - jrAman</h2>
            <p className="text-xl text-muted-foreground mb-4">
              I'm Aman Shah, also known as jrAman, a skilled developer from Nepal specializing in the MERN stack and
              Next.js. As an Arniko coder, I craft web applications that are both powerful and user-friendly.
            </p>
            <p className="text-xl text-muted-foreground">
              My expertise in MongoDB, Express.js, React.js, Node.js, and Next.js allows me to create efficient,
              scalable, and innovative solutions for complex problems. I'm passionate about web development and
              constantly strive to stay at the forefront of technology.
            </p>
            <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground" variant="outline">
              Download Resume
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/aman-coding.png"
              alt="Aman Shah Coding"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* ✅ Rotated "ABOUT" title with smooth scrolling animation */}
      <motion.div
        className="hidden lg:block absolute left-[-49px] top-1/2 z-20"
        initial={{ x: -100, opacity: 0, rotate: -90 }}
        animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0, rotate: -90 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold text-foreground">ABOUT</h2>
      </motion.div>
    </section>
  )
}
