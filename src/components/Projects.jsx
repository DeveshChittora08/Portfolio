
// import project from '../Img/project.jpg'
import Focus from '../Img/focus-on -today.png'
import cofee from '../Img/cofee.png'
import e_learning from '../Img/E-learning.png'
import {motion} from 'motion/react'

function Projects() {
  return (
    <div className='min-h-screen bg-slate-200'>

<hr className='w-48 h-1 mx-auto  bg-gray-600 border-0 rounded-sm  dark:bg-gray-700' />
        
      <motion.div 
       initial={{ y:20,opacity: 0 }}
       whileInView={{y:0,opacity: 1 }}
       transition={{ duration: 0.8, delay: 0.5 }}
      id='project'>
        < motion.h1
         initial={{ y:20,opacity: 0 }}
         whileInView={{y:0,opacity: 1 }}
         transition={{ duration: 0.8, delay: 0.5 }}
        className='font-bold text-center text-2xl py-8'>My Projects</motion.h1>

        <p className=' text-center font-serif text-sm w-30 px-10'>Here are some of the projects I've built as part of my web development journey. Each one helped me learn and apply different technologies like HTML, CSS, JavaScript, ReactJS, and Tailwind CSS. I love creating clean, functional, and responsive websites, and I’m always working to improve and build more real-world applications.</p>
      </motion.div>

    
    <div className='grid md:grid-cols-3 gap-6 py-10 px-10 '>
      <motion.div 
       whileInView={{ scale:1.05 }}
       transition={{ duration: 0.8, delay: 0.5 }}
      className='bg-white flex flex-col items-center rounded-xl overflow-hidden gap-3 mt-5    hover:scale-105 hover:duration-300       hover:shadow-[0_2px_20px_rgba(8,_120,_190)]'>
         <img className='h-[300px] overflow-hidden object-cover w-full' src={Focus} alt="" />
         <h3 className='text-center font-semibold text-2xl pt-3'>Focus On Today</h3>
         <p className='text-wrap px-5 w-50 text-slate-500 '> HTML CSS JS </p>

         <a className='border border-2 border-gray-700 rounded-full py-1 px-3 hover:bg-black hover:text-white hover:border-none mb-2 ' href="https://focus-on-today08.netlify.app/">View</a>
      </motion.div>


      <motion.div 
       whileInView={{ scale:1.05 }}
       transition={{ duration: 0.8, delay: 0.5 }}
      className='bg-white flex flex-col items-center rounded-xl overflow-hidden gap-3 mt-5   hover:scale-105 hover:duration-300       hover:shadow-[0_2px_20px_rgba(8,_120,_190)]'>
         <img className='h-[300px] w-full overflow-hidden object-fill' src={cofee} alt="" />
         <h3 className='text-center font-semibold text-2xl pt-3'>Cofee Shop</h3>
         <p className='text-wrap px-5 w-50 text-slate-500 '> HTML CSS JS </p>

         <a className='border border-2 border-gray-700 rounded-full py-1 px-3 hover:bg-black hover:text-white hover:border-none mb-2 ' href="https://cofeeshop08.netlify.app/">View</a>
      </motion.div>


      <motion.div 
       whileInView={{ scale:1.05 }}
       transition={{ duration: 0.8, delay: 0.5 }}
      className='bg-white flex flex-col items-center rounded-xl overflow-hidden gap-3 mt-5  hover:scale-105 hover:duration-300       hover:shadow-[0_2px_20px_rgba(8,_120,_190)]'>
         <img className='h-[300px] w-full overflow-hidden object-full' src={e_learning} alt="" />
         <h3 className='text-center font-semibold text-2xl pt-3'>E-Learning.</h3>
         <p className='text-wrap px-5 w-50 text-slate-500 '>React , Telwind CSS </p>

         <a className='border border-2 border-gray-700 rounded-full py-1 px-3 hover:bg-black hover:text-white hover:border-none mb-2 ' href="https://e-learning08.netlify.app/">View More</a>
      </motion.div>


   

    
      
      
      </div>
    </div>
  )
}

export default Projects
