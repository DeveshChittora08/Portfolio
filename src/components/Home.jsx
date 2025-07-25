
import myimg from '../Img/dev2.png'

import { motion } from "motion/react"



function Home() {
    return (
        <>

            <div id='home' className='pt-8'>

                <div className='flex flex-col items-center justify-center gap-3 h-screen bg-slate-200 justify-center'>

                    < motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                        className=''>
                        <img className='w-32' src={myimg} alt="" />
                    </motion.div>

                    <motion.h3
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className='text-xl md:text-2xl lg:text-4xl mb-3 font-mono'>Hi! I'm Devesh Chittora</motion.h3>
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}

                        className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-teal-950 pb-3 '>Frontend Web Developer</motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className='max-w-2xl mx-auto font-sans px-5'>"I'm a passionate web developer focused on building interactive and responsive websites using ReactJS, HTML, CSS, and JavaScript. Always eager to learn and grow, I love turning ideas into clean, functional code."</motion.p>


                    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                        < motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className='px-10 py-3 border rounded-full border-gray-500 flex text-white items-center bg-black' href='#contact'>Contact me</motion.a>
                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            href="/DEVESH RESUME.docx" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center'>My Resume</motion.a>
                    </div>

                </div>

                {/* <About/>
                <Skills/>
                <Projects/>
                <Contact/> */}
                
            </div>

        </>


    )
}

export default Home
