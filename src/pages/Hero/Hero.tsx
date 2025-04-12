import React from 'react'
import Slider from './Slider/Slider'


function Hero() {
  return (
    <div className='w-full md:h-[calc(100vh-8ch)] h-auto bg-gradient-to-tr from-yellow-700 via-amber-800 to-red-700 flex items-center justify-between mt-[8ch] lg:px-28 md:px-16 sm:px-7 px-4'>
      <div className="flex-1 w-full flex items-center  justify-between gap-x-8 gap-y-4 md:py-0 flex-wrap">
        <div className="md:w-[45%] w-full space-y-8">
            <div className="space-y-4">
                <h6 className="text-yellow-200/70 text-base font-normal bg-neutral-900/40 w-fit px-3 py-0 5 rounded-lg">
                Try Healthy and Quality Food
                </h6>
                <h1 className="text-neutral-50 font-black md:text[5rem] text-5xl leading-tight">
                    Heathy Foods for every Taste
                </h1>
                <p className="md:text-base text-sm text-neutral-300 font-normal">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, magnam sequi? Aperiam asperiores necessitatibus temporibus odit dolorem ea culpa beatae inventore repellat. Obcaecati, magnam! Ea in placeat perspiciatis reiciendis sapiente!
                </p>
            </div>
            <button className="w-fit px-8 py-2 text-lg font-medium bg-neutral-200 text-neutral-900 hover:text-neutral-100 hover:bg-neutral-100/10 border-2 border-neutral-100 hover:border-neutral-100 rounded-xl ease-in-out duration-300">
            Order Now
            </button> 
        </div>
        <div className="md:w-[50%] w-full space-y-4">
            <Slider />
        </div>
      </div>
    </div>
  )
}

export default Hero
