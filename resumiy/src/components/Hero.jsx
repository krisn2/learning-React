import React from 'react'

const Hero = () => {
  return (
    <div className='mt-24'>
        <div className="flex justify-center mb-8">
            <div className="felx items-center bg-white/10 backdrop-blur-md px-6 py-2 border border-white/20 rounded-full">
                <p className='text-white/90 text-sm'>Trusted by 100K+ professionals</p>
            </div>
        </div>

        <div className="flex justify-center my-12">
            <div className="max-w-4xl text-center">
                <h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text text-transparent leading-tight mb-6'>Build resume in seconds</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero