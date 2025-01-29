"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Task Manager Pro",
    description: "A comprehensive task management application for enhanced productivity",
    image: "/project1.jpg",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "SecureShare",
    description: "A secure file sharing system with advanced encryption",
    image: "/project2.jpg",
    techStack: ["Next.js", "Express", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "DevConnect",
    description: "A social platform for developers to share their coding experiences",
    image: "/project3.jpg",
    techStack: ["React", "GraphQL", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border">
                <CardHeader>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary rounded text-sm text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
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
