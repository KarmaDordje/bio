"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const LEAVES = [
  { id: 1, src: "/images/leaves/leaf-1.png", size: 150, x: "100%", duration: 25, delay: 0 },
  { id: 2, src: "/images/leaves/leaf-2.png", size: 220, x: "85%", duration: 30, delay: 5 },
  { id: 3, src: "/images/leaves/leaf-3.png", size: 180, x: "60%", duration: 28, delay: 10 },
  { id: 4, src: "/images/leaves/leaf-1.png", size: 150, x: "92%", duration: 22, delay: 15 },
  { id: 5, src: "/images/leaves/leaf-2.png", size: 190, x: "75%", duration: 35, delay: 2 },
  { id: 6, src: "/images/leaves/leaf-3.png", size: 200, x: "80%", duration: 20, delay: 8 },
  { id: 7, src: "/images/leaves/leaf-1.png", size: 150, x: "65%", duration: 40, delay: 20 },
]

export function FloatingLeaves() {
  return (
    <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
      {LEAVES.map((leaf) => (
        <motion.div
          key={leaf.id}
          initial={{ 
            x: leaf.x, 
            y: "-10%", 
            opacity: 0,
            rotate: 0 
          }}
          animate={{ 
            y: "110%",
            x: [leaf.x, `calc(${leaf.x} + 5%)`, `calc(${leaf.x} - 5%)`, leaf.x],
            rotate: [0, 180, 360, 540],
            opacity: [0, 0.6, 0.6, 0]
          }}
          transition={{ 
            duration: leaf.duration, 
            repeat: Infinity,
            delay: leaf.delay,
            ease: "linear"
          }}
          className="absolute"
          style={{ width: leaf.size, height: leaf.size }}
        >
          <Image
            src={leaf.src}
            alt=""
            width={leaf.size}
            height={leaf.size}
            className="opacity-80 blur-[0.5px] drop-shadow-sm"
          />
        </motion.div>
      ))}
    </div>
  )
}
