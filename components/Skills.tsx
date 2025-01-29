"use client"

import React from "react"
import { motion } from "framer-motion"
import { RotatedTitle } from "@/components/RotatedTitle"

const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟩" },
  { name: "Express.js", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "API Development", icon: "🔌" },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24 bg-background text-foreground">
      <RotatedTitle title="SKILLS" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex items-center p-4 bg-secondary rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl mr-2">{skill.icon}</span>
              <span className="font-medium text-secondary-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

