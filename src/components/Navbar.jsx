import React, { useRef } from 'react'
import { FiAlignRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
// import { Link } from 'react-router';

function Navbar() {

    const sideMenueRef = useRef()

    const openMenue = ()=>{
        sideMenueRef.current.style.transform ='translatex(-16rem)'
    }
    const closeMenue = ()=>{
        sideMenueRef.current.style.transform ='translatex(16rem)'
    }

    return (
        <div className='fixed z-[1]'>
            <nav className='w-full fixed px-4 lg:px-10 bg-[#01142d] h-[70px] flex items-center justify-between  text-white 
            z-50 shadow-md border-b-2 border-cyan-50'>
                <div className='text-2xl md:text-3xl font-sans font-bold uppercase'  >
                   <a href="#home">devesh</a>
                </div>

                <div className=' hidden md:flex px-3 space-x-7 lg:gap-8 ' >
                {/* <Link className='hover:text-yellow-200 font-thin' to='/'>Home</Link>
                <Link className='hover:text-yellow-200 font-thin' to='/about'>About</Link>
                <Link className='hover:text-yellow-200 font-thin' to='/skills'>Skills</Link>
                <Link className='hover:text-yellow-200 font-thin' to='/project'>Project</Link>
                <Link className='hover:text-yellow-200 font-thin' to='/contact'>Contact</Link> */}
                    
                     <a className='hover:text-yellow-200
                     font-thin' href="#home">Home</a>
                     <a className='hover:text-yellow-200
                     font-thin' href="#about">About</a>
                     <a className='hover:text-yellow-200
                     font-thin' href="#skill">Skill</a>
                     <a className='hover:text-yellow-200
                    font-thin' href="#project">Project</a>
                    <a className='hover:text-yellow-200
                     font-thin' href="#contact">Contact</a>
                </div>

                <FiAlignRight onClick={openMenue} className='md:hidden text-3xl mx-3' />

              

                <div ref={sideMenueRef} className=' flex flex-col  md:hidden    px-10 fixed top-0 bottom-0 w-64  h-screen bg-sky-900 transition duration-500 -right-64 gap-8 ' >
                    
                <div className='py-5 text-3xl' >
                    <RxCross2 onClick={closeMenue}/>
                    </div>


                    <div className='flex flex-col gap-8 py-3'>
                     
                    <a onClick={closeMenue} className='hover:text-yellow-200
                    font-thin' href="#home">Home</a>
                    <a onClick={closeMenue} className='hover:text-yellow-200
                    font-thin' href="#about">About</a>
                    <a onClick={closeMenue} className='hover:text-yellow-200
                    font-thin' href="#skill">Skill</a>
                    <a onClick={closeMenue} className='hover:text-yellow-200
                    font-thin' href="#project">Project</a>
                    <a onClick={closeMenue} className='hover:text-yellow-200
                    font-thin' href="#contact">Contact</a>

                    </div>

                   
                </div>


            </nav>
        </div>
    )
}

export default Navbar
