import { useEffect, useRef, useState } from "react"
import "./Strength_contents.css"
import {motion} from 'framer-motion'


export default function Strength_contents(){

  return(
    
      <div className="strength_contents_body">
        <motion.div
            initial={{ opacity:0, x: 0 }}
            whileInView={{opacity:1, x: -50 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: .5,
                x: { duration: 1 },
            }}
        >
          <div className="strength_contents">
            <p className="strength_icon">📓</p>
            <p className="strength">#<br></br>배움과 성장을 두려워하지 않는</p>
          </div>
        </motion.div>
        <motion.div
            initial={{ opacity:0, x: 0 }}
            whileInView={{opacity:1, x: -50 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: .5,
                delay:.2,
                x: { duration: 1 },
            }}
        >
          <div className="strength_contents">
            <p className="strength_icon">🧠</p>
            <p className="strength">#<br></br>문제에 끈질기게 접근하는</p>
          </div>
        </motion.div>
        <motion.div
            initial={{ opacity:0, x: 0 }}
            whileInView={{opacity:1, x: -50 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: .5,
                delay: .4,
                x: { duration: 1 },
            }}
        >
          <div className="strength_contents">
            <p className="strength_icon">🌱</p>
            <p className="strength">#<br></br>기초를 튼튼히 다지는</p>
          </div>
        </motion.div>
      </div>
  )
}