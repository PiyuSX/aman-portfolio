"use client"

import React from "react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact")
      if (!section) return

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Show when more than 40% of "Contact" is in view, hide when scrolled away
      setIsVisible(rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.3)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-background text-foreground mt-2">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4">
              <Input type="text" name="name" placeholder="Your Name" required className="bg-input border-input text-foreground" />
              <Input type="email" name="email" placeholder="Your Email" required className="bg-input border-input text-foreground" />
              <Textarea name="message" placeholder="Your Message" required className="bg-input border-input text-foreground" />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4"
          >
            <p className="text-lg text-muted-foreground">Connect with me on social media:</p>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center p-3 rounded-full bg-muted transition-all duration-300 hover:bg-[#333]">
                <Github className="h-6 w-6 text-primary transition-all duration-300 group-hover:text-white" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center p-3 rounded-full bg-muted transition-all duration-300 hover:bg-[#0077B5]">
                <Linkedin className="h-6 w-6 text-primary transition-all duration-300 group-hover:text-white" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center p-3 rounded-full bg-muted transition-all duration-300 hover:bg-[#1DA1F2]">
                <Twitter className="h-6 w-6 text-primary transition-all duration-300 group-hover:text-white" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔹 Rotated "CONTACT" Title - Now Animating Like EXPERIENCE Section! */}
      <motion.div
        className="hidden lg:block absolute left-[-72px] top-1/2 z-20"
        initial={{ x: -100, opacity: 0, rotate: -90 }}
        animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0, rotate: -90 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold text-foreground">CONTACT</h2>
      </motion.div>
    </section>
  )
}
