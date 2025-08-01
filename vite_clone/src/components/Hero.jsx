import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center h-full py-20 text-white">
        <div className="flex items-center justify-center gap-1.5 border border-purple-400/50 rounded-4xl px-2.5 py-1">
          <img src="https://vite.dev/viteconf.svg" className="h-5 w-5" alt="" />
          <span className="font-medium bg-gradient-to-br from-sky-300 via-violet-300 to-teal-200 bg-clip-text text-transparent">
            ViteConf 2025
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-10 gap-5">
          <h1 className="text-neutral-50 text-7xl tracking-tighter font-medium">
            The Build Tool
          </h1>
          <h2 className="text-gray-50/70 text-7xl tracking-tighter font-medium">
            For the web
          </h2>
          <p className="text-gray-50/70 text-xl tracking-tight">
            Vite is a blazing fast frontend build tool powering <br /> the next
            generation of web applications.
          </p>
        </div>
        <div className=" flex justify-center items-center mt-10">
          <span className="bg-gradient-to-br from-sky-300 via-violet-500 to-purple-600 text-white rounded-lg px-3 ml-2 py-2 cursor-pointer">
            Get Started
          </span>
          <span className="ml-2 text-gray-50/70 flex items-center gap-1 cursor-pointer border border-gray-50/20 rounded-lg bg-transparent px-3 py-2">
            <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
             className="w-6 h-6 fill-white/50 hover:fill-white transition-all duration-200 cursor-pointer"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
            </span>
            Github
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
