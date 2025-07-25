import React from 'react'
import { FaCode } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <div className='mt-20' >
      <div className='flex items-center justify-center  gap-3'>
        <h1 className='font-bold font-sans text-3xl'>DEVESH</h1>
        <FaCode className='font-bold text-3xl' />
      </div>

      <div className='flex items-center justify-center gap-2 mt-2 '> 
        <CiMail />
        <p>@chittoradevesh@gmail.com</p>
        </div>

     
    

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&#169; 2025 Devesh Chittora. All rights reserved. </p>
        <ul className='flex items-center justify-center gap-10 mt-4 sa:mt-0'>
            <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
