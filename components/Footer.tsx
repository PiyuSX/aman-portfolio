"use client"

import React from "react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative py-6 md:py-8 bg-background text-foreground border-t border-border">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Rotated Title */}
        <motion.div
          className="absolute left-[-40px] top-1/2 -translate-y-1/2 -rotate-90 hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h2 className="text-xl font-bold tracking-wide text-foreground">FOOTER</h2>
        </motion.div>

        {/* Footer Content */}
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Aman Shah. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
