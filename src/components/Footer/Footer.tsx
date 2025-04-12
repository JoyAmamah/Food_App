import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaMapPin, FaMessage, FaPhone, FaVoicemail } from 'react-icons/fa6';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className='w-full bg-neutral-700 lg:px-28 md:px-16 sm:px-7 mt[3ch] px-4 py-10'>
        <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-1 gap-14">
           
            <div className="col-span-2 space-y-7">
                <div className="space-y-3">
                 <Link to="/" className="text-4xl text-neutral-800 font-bold">
                    <span className="text-yellow-500">JA</span>-Food
                </Link>
                <p className="text-base text-neutral-400 font-normal line-clamp-3">
                Food brings people together on many different levels. It’s nourishment of the soul and body, it’s truly love.
                </p>
                </div>
                <div className="flex items-center gap-x-3">
                    <Link to={'/'} className='w-11 h-11 rounded-lg bg-neutral-100/20 flex items-center justify-center text-xl text-neutral-200 group ease-in-out duration-300'>
                    <FaInstagram className='w-6 h-8 group-hover:text-yellow-500 ease-in-out duration-300' />
                    </Link>
                    <Link to={'/'} className='w-11 h-11 rounded-lg bg-neutral-100/20 flex items-center justify-center text-xl text-neutral-200 group ease-in-out duration-300'>
                    <FaFacebook className='w-6 h-8 group-hover:text-yellow-500 ease-in-out duration-300' />
                    </Link>
                    <Link to={'/'} className='w-11 h-11 rounded-lg bg-neutral-100/20 flex items-center justify-center text-xl text-neutral-200 group ease-in-out duration-300'>
                    <FaTwitter className='w-6 h-8 group-hover:text-yellow-500 ease-in-out duration-300' />
                    </Link>
                    <Link to={'/'} className='w-11 h-11 rounded-lg bg-neutral-100/20 flex items-center justify-center text-xl text-neutral-200 group ease-in-out duration-300'>
                    <FaYoutube className='w-6 h-8 group-hover:text-yellow-500 ease-in-out duration-300' />
                    </Link>
                </div>
            </div>
            <div className="col-span-1 space-y-7">
                <h1 className="text-xl text-neutral-100 font-medium">
                    Quick Links
                </h1>
                <div className="space-y-3 flex flex-col">
                    <Link to={'/'} className='text-base text-neutral-400 hover:text-yellow-500 font-normal ease-in-out duration-300'>
                        About Us
                    </Link>
                    <Link to={'/'} className='text-base text-neutral-400 hover:text-yellow-500 font-normal ease-in-out duration-300'>
                        Popular Menu
                    </Link>
                    <Link to={'/'} className='text-base text-neutral-400 hover:text-yellow-500 font-normal ease-in-out duration-300'>
                        Our Gallery
                    </Link>
                    <Link to={'/'} className='text-base text-neutral-400 hover:text-yellow-500 font-normal ease-in-out duration-300'>
                        Contact
                    </Link>
                </div>
            </div>

            <div className="col-span-1 space-y-5">
                <h1 className="text-xl text-neutral-100 font-medium">
                    Top Menu
                </h1>
                <div className="space-y-3 flex flex-col">
                    <Link to={'/'} className='text-base text-neutral-400 hover:text-yellow-500 font-normal ease-in-out duration-300'>
                        Crispy Chicken
                    </Link>
                    <Link to={'/'} className='text-base text-neutral-400 hover:text-yellow-500 font-normal ease-in-out duration-300'>
                        Fresh Burger 
                    </Link>
                    <Link to={'/'} className='text-base text-neutral-400 hover:text-yellow-500 font-normal ease-in-out duration-300'>
                        BreakFast Platter 
                    </Link>
                    <Link to={'/'} className='text-base text-neutral-400 hover:text-yellow-500 font-normal ease-in-out duration-300'>
                        Local Dishes
                    </Link>
                </div>
            </div>
            
            <div className="col-span-2 space-y-5">
                <h2 className='text-xl text-neutral-100 font-medium'>
                    Get in touch
                </h2>
                <div className="space-y-5">
                    <div className="space-y-1">
                        <h6 className="text-lg text-neutral-300 font-medium">
                            Our Address
                        </h6>
                        <div className="flex item-center gap-x-2">
                            <div className="w-6 h-8 rounded-lg bg-yellow-600/40 text-neutral-300 flex items-center justify-center">
                                <FaMapPin />
                            </div>
                            <p className="text-base text-neutral-00 font-normal flex-1">
                                123 Fausa street, houson view, Kenya
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-1">
                        <h6 className="text-lg text-neutral-300 font-medium">
                            Our phoneNumber
                        </h6>
                        <div className="flex item-center gap-x-2">
                            <div className="w-6 h-8 rounded-lg bg-yellow-600/40 text-neutral-300 flex items-center justify-center">
                                <FaPhone />
                            </div>
                            <p className="text-base text-neutral-00 font-normal flex-1">
                                09033345234, 08034567891
                            </p>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h6 className="text-lg text-neutral-300 font-medium">
                            Our Email
                        </h6>
                        <div className="flex item-center gap-x-2">
                            <div className="w-6 h-8 rounded-lg bg-yellow-600/40 text-neutral-300 flex items-center justify-center">
                                <FaMessage />
                            </div>
                            <p className="text-base text-neutral-00 font-normal flex-1">
                                jafoods@gmail.com
                            </p>
                        </div>
                    </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer
