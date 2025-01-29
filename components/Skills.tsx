"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"
import { SiNextdotjs, SiExpress, SiTailwindcss } from "react-icons/si"
import { TbApi } from "react-icons/tb"

const skills = [
  { name: "JavaScript", icon: <FaJs size={40} />, color: "#F7DF1E" }, // Yellow for JS
  { name: "React", icon: <FaReact size={40} />, color: "#61DAFB" },     // Blue for React
  { name: "Next.js", icon: <SiNextdotjs size={40} />, color: "#000000" },// Black for Next.js
  { name: "Node.js", icon: <FaNodeJs size={40} />, color: "#68A063" },   // Green for Node.js
  { name: "Express.js", icon: <SiExpress size={40} />, color: "#000000" },// Black for Express.js
  { name: "MongoDB", icon: <FaDatabase size={40} />, color: "#47A248" },  // Green for MongoDB
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, color: "#38BDF8" }, // Blue for Tailwind
  { name: "API Development", icon: <TbApi size={40} />, color: "#000000" }, // Black for API
]

export function Skills() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills")
      if (!section) return

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Show when more than 40% of "Skills" is in view, hide when scrolled away
      setIsVisible(rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.3)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="skills" className="relative py-16 md:py-24 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex items-center p-4 bg-secondary rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:bg-opacity-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="mr-4 text-2xl transition-colors duration-300 group-hover:text-[color]">
                {/* Icon with hover effect */}
                <motion.div className="group-hover:text-[color]" style={{ color: skill.color }}>
                  {skill.icon}
                </motion.div>
              </span>
              <span className="font-medium text-secondary-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Rotated "SKILLS" title with smooth scrolling animation */}
      <motion.div
        className="hidden lg:block absolute left-[-46px] top-1/2 z-20"
        initial={{ x: -100, opacity: 0, rotate: -90 }}
        animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0, rotate: -90 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold text-foreground">SKILLS</h2>
      </motion.div>
    </section>
  )
}
