import React from 'react'

const Navbar = () => {
  return (
    <nav className='pt-3 flex items-center justify-center'>
        <div className="px-4 py-4 bg-white/10 rounded-lg shadow-lg backdrop-blur-lg w-full max-w-4xl mx-auto flex justify-between">
            <div className="">
                <h1 className="text-white font-bold text-xl">Resume-Craft</h1>
            </div>
            <div className="gap-4 flex items-center">
                <a href="#" className='text-white/80 hover:text-white transition-all duration-300' >About</a>
                <a href="#" className='text-white/80 hover:text-white transition-all duration-300' >Contact</a>
                <a href="#" className='text-white/80 hover:text-white transition-all duration-300' >Services</a>
                <a href="#" className='text-white/80 hover:text-white transition-all duration-300' >Pricing</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar