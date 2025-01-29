"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { RotatedTitle } from "@/components/RotatedTitle"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <RotatedTitle title="HOME" />
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Aman Shah - Web Developer Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 text-center text-foreground">
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Image
            src="/aman-avatar.png"
            alt="Aman Shah - jrAman"
            width={150}
            height={150}
            className="mx-auto rounded-full border-4 border-primary mb-8"
          />
        </motion.div>
        <motion.h1
          className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Aman Shah
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          MERN Stack & Next.js Developer | jrAman | Arniko Coder
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View My Work
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

