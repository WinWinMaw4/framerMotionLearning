"use client"
import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import AnimatedBox from './AnimatedBox'
import { motion, Variants } from "framer-motion"
import { splitStringUsingRegex } from './utils/splitStringRegex'

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
}

const page = () => {
  const header = "Win Win Maw Frontend Developer";
  const textContent = `Win Win Maw ❤️❤️ is a passionate and skilled 👽💚 Frontend Developer with a keen eye for creating user-friendly and visually engaging web applications. Specializing in responsive design and interactive experiences, Win Win Maw combines technical expertise with a strong design sense to bring projects to life. With proficiency in HTML, CSS, JavaScript, and modern frameworks like React, she is adept at turning complex ideas into clean, efficient code. Win Win Maw continually seeks out new technologies and design trends to stay at the forefront of frontend development, ensuring that her work not only meets current standards but also sets new benchmarks for innovation and quality.`

  const headingChars = splitStringUsingRegex(header);
  const contentChars = splitStringUsingRegex(textContent);


  return (
    <div>
      <main className=" font-bold font-mono flex min-h-screen justify-center flex-col items-center p-4">
        <div className='text-2xl'>Win Win Maw Framer Motion</div>
        <div className="text-5xl mb-10 h-screen">
          <AnimatedCounter from={0} to={500} />
          <AnimatedBox />
        </div>
        <div className="w-[700px] h-screen bg-violet-900 p-5">
          <motion.h2 
          initial="hidden"
          whileInView="reveal"
          transition={{staggerChildren: .02}}
          className='text-5xl'
          >
            {
              headingChars.map((char,index) => (
                <motion.span
                  key={index}
                  transition={{ duration: 0.5 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))
            }


          </motion.h2>
          <motion.p
             initial="hidden"
          whileInView="reveal"
          transition={{staggerChildren: .02}}
          className='text-lg'
          >
            {
              contentChars.map((char,index) => (
                <motion.span
                  key={index}
                  transition={{ duration: 0.5 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))
            }
          </motion.p>
        </div>
      </main>
    </div>
  )
}

export default page