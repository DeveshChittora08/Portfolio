import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'motion/react'

function Contact() {


    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key","02982ec2-035e-4f02-9d17-c1861a3b3705");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <motion.div  
    initial={{opacity: 0 }}
    whileInView={{opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    id='contact' className=' w-full px-[12%] py-10 scroll-mt-20 bg-slate-100'>
      <motion.h3
       initial={{ y:20,opacity: 0 }}
       whileInView={{y:0,opacity: 1 }}
       transition={{ duration: 0.8, delay: 0.5 }}
      className='text-sm text-center'>Connect with us</motion.h3>
<motion.h1
 initial={{ y:20,opacity: 0 }}
 whileInView={{y:0,opacity: 1 }}
 transition={{ duration: 0.8, delay: 0.5 }}
className='text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-teal-950 pb-3 '>Get in touch</motion.h1>
<motion.p
 initial={{ y:-20,opacity: 0 }}
 whileInView={{y:0,opacity: 1 }}
 transition={{ duration: 0.5, delay: 0.5 }}
className='max-w-2xl mx-auto font-sans text-[15px] px-10 text-center'>" Whether you have an idea for a project, want to collaborate, or just want to say hello — I’d love to connect! I’m always open to new opportunities and meaningful conversations."</motion.p>



   <motion.form
     initial={{ opacity: 0 }}
     whileInView={{opacity: 1 }}
     transition={{ duration: 0.5, delay: 0.3 }}
   onSubmit={onSubmit} className='max-w-2xl mx-auto' action="">
    <div className='grid md:grid-cols-2 gap-6 mt-10 mb-8'>
        <motion.input
         initial={{ x:-50,opacity: 0 }}
         whileInView={{x:0,opacity: 1 }}
         transition={{ duration: 0.8, delay: 0.5 }}
        className='flex-1 p-2 outline-none border border-gray-400 border-[0.5] rounded-md bg-white ' type="text" placeholder='Enter your name' name='name' />
        <motion.input
          initial={{ x:50,opacity: 0 }}
          whileInView={{x:0,opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        required   className='flex-1 p-2 outline-none border border-gray-400 border-[0.5px] rounded-md bg-white ' type="text" placeholder='Enter your email' name='email' />
    </div>
    <motion.textarea
      initial={{ y:20,opacity: 0 }}
      whileInView={{y:0,opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    rows={6} placeholder='Enter your massage' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md' name="message" id=""></motion.textarea>

    <motion.button
      whileInView={{scale:1.05,opacity: 1 }}
      transition={{ duration: 0.8 }}
    type='submit' className='py-3 mt-5 px-8 w-max flex items-center justify-between gap-3 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit now <FaArrowRight /> </motion.button>

    <p className='mt-4'>{result}</p>


   </motion.form>

  


    </motion.div>

    
  )
}

export default Contact
