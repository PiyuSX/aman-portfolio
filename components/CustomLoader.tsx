"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

export const CustomLoader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Adjust this time as needed

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div className="relative w-24 h-24">
        {/* Outer spinning ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full"
        />
        {/* Pulsing center dot */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-6 h-6 bg-primary rounded-full" />
        </motion.div>
        {/* Orbiting dot */}
        <motion.div
          animate={{ 
            rotate: -360,
          }}
          transition={{
            duration: 1.5,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="absolute inset-0"
        >
          <div className="w-3 h-3 bg-primary rounded-full absolute top-0 left-1/2 -translate-x-1/2" />
        </motion.div>
      </div>
    </motion.div>
  )
}