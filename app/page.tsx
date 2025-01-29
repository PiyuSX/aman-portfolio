"use client"

import dynamic from "next/dynamic"
import { PageTransition } from "@/components/PageTransition"

const Hero = dynamic(() => import("@/components/Hero").then((mod) => mod.Hero))
const About = dynamic(() => import("@/components/About").then((mod) => mod.About))
const Skills = dynamic(() => import("@/components/Skills").then((mod) => mod.Skills))
const Projects = dynamic(() => import("@/components/Projects").then((mod) => mod.Projects))
const Experience = dynamic(() => import("@/components/Experience").then((mod) => mod.Experience))
const Contact = dynamic(() => import("@/components/Contact").then((mod) => mod.Contact))
const Footer = dynamic(() => import("@/components/Footer").then((mod) => mod.Footer)) // Added Footer

export default function Home() {
  return (
    <PageTransition>
      <div className="w-full bg-background text-foreground font-sans antialiased">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer /> 
      </div>
    </PageTransition>
  )
}
