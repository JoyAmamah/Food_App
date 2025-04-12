import React from 'react'
import { FaTruck } from 'react-icons/fa'
import { MdPayment } from 'react-icons/md'
import { PiHeadsetBold } from 'react-icons/pi'

function Banner() {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 lg:py-10 md:py-8 sm:py-6 py-4 '>
      <div className="bg-zinc-700 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-14 md:gap-12 sm:gap-8 gap-6 items-center rounded-md px-4 py-8">
        <div className="flex items-center justify-center gap-x-3">
            <div className="w-11 h-11 rounded-xl bg-yellow-800/60 flex items-center justify-center text-2xl text-neutral-100">
           <FaTruck />
            </div>
            <h5 className="text-lg text-neutral-200 font-medium">
                Free Delivery for $50 above 
            </h5>
        </div>
        <div className="flex items-center justify-center gap-x-3">
            <div className="w-11 h-11 rounded-xl bg-yellow-800/60 flex items-center justify-center text-2xl text-neutral-100">
           <MdPayment />
            </div>
            <h5 className="text-lg text-neutral-200 font-medium">
                Secure Payment Method
            </h5>
        </div>
        <div className="flex items-center justify-center gap-x-3">
            <div className="w-11 h-11 rounded-xl bg-yellow-800/60 flex items-center justify-center text-2xl text-neutral-100">
           <PiHeadsetBold />
            </div>
            <h5 className="text-lg text-neutral-200 font-medium">
                24/7 Customer Support
            </h5>
        </div>
      </div>
    </div>
  )
}

export default Banner
