import React from 'react'

const Hero = () => {
  return (
    <div className='mt-24 min-h-screen'>
        <div className="flex justify-center mb-8">
            <div className="felx items-center bg-white/10 backdrop-blur-md px-6 py-2 border border-white/20 rounded-full">
                <p className='text-white/90 text-sm'>Trusted by 100K+ professionals</p>
            </div>
        </div>

        <div className="flex justify-center my-12">
          <div className="max-w-4xl text-center">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text text-transparent leading-tight mb-6 animate-fade-in">
              Craft Your Resume,
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Land Your Dream Job
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Create professional, ATS-friendly resumes in minutes with our AI-powered builder. 
              Stand out from the crowd and get hired faster.
            </p>
          </div>
        </div>

        

    </div>
  )
}

export default Hero