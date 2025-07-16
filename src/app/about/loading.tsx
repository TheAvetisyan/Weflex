"use client"

import { motion } from "motion/react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-px w-16 bg-primary mb-8 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.h1
          className="text-4xl md:text-5xl font-extralight tracking-tight text-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="font-normal">Weflex</span>.am
        </motion.h1>
        
        <motion.p 
          className="text-muted-foreground text-center mt-4 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Loading experience...
        </motion.p>
      </motion.div>
    </div>
  )
}
