import React from 'react'
import table from '../../../../assets/table.jpg'

function Table() {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 pb-6'>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:block hidden">
            <img src={table} alt="" className="w-full aspect-square object-cover object-center rounded-l-xl" />
        </div>
        <div className="w-full bg-zinc-800 md:p-8 p-4 flex justify-center md:rounded-r-xl md:rounded-1-none rounded-r-xl rounded-l-xl">
            <div className="w-full space-y-6">
                 <div className="space-y-1">
                    <h5 className="text-base-yellow-500 font-normal">
                        Reservation
                    </h5>
                    <h1 className='text-xl text-neutral-100 font-bold'>
                        Book a Table Online
                    </h1>
                 </div>
                 <div className="grid md:grid-cols-2 grid-col-1 gap-6">
                    <div className="space-y-1.5">
                        <label htmlFor="Fullname" className="text-base text-neutral-400 font-normal block">
                            Fullname
                        </label>
                        <input type="text" placeholder='e.g. G-tech official' className="w-full h-12 border border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-nene focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300" />
                    </div>
                    <div className="space-y-1.5">
                    <label htmlFor="Email" className="text-base text-neutral-400 font-normal block">
                            Email Address
                        </label>
                        <input type="email" id='email' placeholder='e.g. Gtechofficial@gmail.com' className="w-full h-12 border border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-nene focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300" />
                    </div>
                 </div>
                 <div className="grid md:grid-cols-2 grid-col-1 gap-6">
                 <div className="space-y-1.5">
                        <label htmlFor="datetime" className="text-base text-neutral-400 font-normal block">
                            Date and Time
                        </label>
                        <input type="datetime-local" id='datetime' placeholder='e.g. G-tech official' className="w-full h-12 border border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-nene focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300" />
                    </div>
                    <div className="space-y-1.5">
                    <label htmlFor="Noofpeople" className="text-base text-neutral-400 font-normal block">
                            No of people
                        </label>
                        <select name="noofpeople" id="noofpeople" className="w-full h-12 border border-neutral-400/40 bg-neutral-900/5 px-3 rounded-lg text-base text-neutral-300 placeholder:text-neutral-500/90 outline-none focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                 </div>
                 <div className="space-y-1.5">
                        <label htmlFor="spclrequest" className="w-full text-base text-neutral-400 font-normal block">
                            Any Special Request?
                        </label>
                        <textarea name="spclrequest" id="spclrequest" placeholder='e.g Decorated table for Birthday' className="w-full h-23 border border-neutral-400/40 bg-neutral-900/5 px-3 py-2 rounded-lg text-base text-neutral-100 font-normal block focus:bg-yellow-600/5 focus:border-yellow-500 ease-in-out duration-300"></textarea>
          </div>
          <button className="w-full h-12 rounded-lg bg-yellow-600 hover:bg-yellow-600/80 !mt-6 !mb-3 text-lg text-neutral-100 font-medium ease-in-out duration-300">
            Book a Table Now
          </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Table
