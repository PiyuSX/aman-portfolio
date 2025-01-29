"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { RotatedTitle } from "@/components/RotatedTitle"

export function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center bg-background text-foreground">
      <RotatedTitle title="ABOUT" />
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
    </section>
  )
}

