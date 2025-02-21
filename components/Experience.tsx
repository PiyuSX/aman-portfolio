"use client"

import React from "react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Computer Science Student",
    institution: "University Name", // Replace with your university
    period: "2024 - Present", // Adjust dates as needed
    description: "Currently pursuing a degree in Computer Science, focusing on algorithms, data structures, and web development technologies including React and JavaScript.",
  },
  {
    title: "Personal Project Developer",
    institution: "Self-Directed Learning",
    period: "Jun 2023 - Present", // Adjust dates as needed
    description: "Building personal projects to enhance skills in full-stack development, including creating web applications with Next.js and exploring modern frameworks.",
  },
  {
    title: "Coursework Contributor",
    institution: "University Name", // Replace with your university
    period: "Sep 2022 - Present", // Adjust dates as needed
    description: "Collaborating on academic projects involving programming fundamentals, software design patterns, and database management systems.",
  },
]

export function Experience() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience")
      if (!section) return

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Show when more than 40% of "Experience" is in view, hide when scrolled away
      setIsVisible(rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.3)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="experience" className="relative py-16 md:py-24 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="flex flex-col md:flex-row md:space-x-4 bg-card p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/4">
                <h3 className="font-bold text-primary">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.institution}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <div className="md:w-3/4 mt-2 md:mt-0">
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rotated "EXPERIENCE" title with animation */}
      <motion.div
        className="hidden lg:block absolute left-[-93px] top-1/2 z-20"
        initial={{ x: -100, opacity: 0, rotate: -90 }}
        animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0, rotate: -90 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold text-foreground">EXPERIENCE</h2>
      </motion.div>
    </section>
  )
}