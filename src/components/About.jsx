import React from 'react'
import myimg from '../Img/dev.jpg'
import { motion } from "motion/react"

function About() {
  return (
    <>
      <div id='about'>
        
        <motion.div
        initial={{  opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='bg-indigo-950 py-8 w-full md:h-screen flex flex-col items-center justify-center text-white md:flex md:flex-row md:justify-around px-5 md:px-32'>
          <motion.div 
          initial={{ y:30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className=''>
            <img className=' border border-4 h-[300px]  md:h-[400px] rounded-3xl md: w-auto' src={myimg} alt="" />
          </motion.div>

          <div className='flex flex-col items-center md:items-start   gap-3 mt-3 ' >
            <motion.h1 
            initial={{ y:-20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='font-bold text-3xl'>About Me</motion.h1>
            <motion.p
            initial={{  opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='  md:w-[30rem]'>Hi, I'm Devesh – a passionate and curious web developer dedicated to crafting clean, responsive, and user-friendly websites. I love turning ideas into interactive digital experiences using modern web technologies like HTML, CSS, JavaScript, and ReactJS.</motion.p>

             <motion.p
               initial={{  opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.8 }}
             className='  md:w-[30rem]'>Currently, I'm focused on sharpening my front-end skills and building real-world projects to strengthen my development journey. I enjoy learning new tools and frameworks, and I’m always excited to take on challenges that push my creativity and problem-solving abilities.</motion.p> 

             <motion.p
               initial={{  opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.8 }}
             className='  md:w-[30rem]'> Beyond coding, I’m also exploring Krishna Consciousness and enjoy spending time reflecting on spiritual growth and mindfulness.</motion.p>

             <motion.b  
               initial={{  opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.8 }}
             >Let’s build something great together !</motion.b>

              
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default About
