import React from 'react'

function Taiwind() {
  return (
    <div className='h-screen bg-slate-900 grid place-content-center'>
      <div >
          <div className=''>
            <div className='p-6 max-w-sm mx-auto bg-white rounded-lg shadow-lg flex items-center space-x-1' >
              <div>
                <img className='h-12 w-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Physics_wallah_logo.jpg/640px-Physics_wallah_logo.jpg " alt="" />
              </div>

              <div>
                <div className='text-xl font-medium text-black'>
                  Tailwind css
                  <p className='text-slate-500 text-base'>By Devesh Chittora</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <button className='bg-sky-500 text-center mt-2 rounded-md text-base text-white p-2 hover:bg-white hover:text-black'>By now</button>
      <div className='text-center my-2'>
        <p className='text-white md:text-green-300 sm:text-yellow-300'>Lorem, ipsum dolor.</p>
      </div>

      <div className="mt-3">
        <div className='max-w-sm mx-auto bg-white rounded-xl md:max-w-xl overflow-hidden'>
         <div className='md:flex'>
         <div>
          <img className='h-48 w-full object-cover md:h-full md:w-48' src="https://images.pexels.com/photos/30287469/pexels-photo-30287469/free-photo-of-wave-tunnel-view-at-chapadmalal-beach-argentina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
         </div>
         <div className='p-8 '>
          <div className='uppercase tracking-wide text-sm font-bold text-blue-600'>An Awsom card</div>
          <a className='block mt-1 text-lg font-medium text-black hover:text-blue-700' href="#">Tailwind is amazing once you understnd of it </a>
          <p className='text-slate-500 mt-2'>Lorem ipsum dolor sit amet.</p>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Taiwind
