import React from 'react'
import { Link } from 'react-router-dom'

import fish from '../../assets/hero5.png'
import pizza from '../../assets/pizza.png'
import burger from '../../assets/burger.png'
import chicken from '../../assets/hero2.png'
import Biyarni from '../../assets/hero3.png'
import Momo from '../../assets/hero4.png'
import sandwich from '../../assets/sandwich.png'
import rice from '../../assets/rice.png'

function Menu() {

    const menuData = [
            {
                id: 1,
                title: "Chicken",
                img: chicken,
                name: 'full Grilled Chicken',
                desc: '',
                price: '$450'
            },
            {
                id: 2,
                title: "Pizza",
                img: pizza,
                name: 'Pizza',
                desc: '',
                price: '$950'
            },
            {
                id: 3,
                title: "Momo",
                img: Momo,
                name: 'Momo',
                desc: '',
                price: '$750'
            },
            {
                id: 4,
                title: "Burger",
                img: burger,
                name: 'Burger',
                desc: '',
                price: '$550'
            },
            {
                id: 5,
                title: "rice",
                img: rice,
                name: 'Smokey Jollof Rice',
                desc: '',
                price: '$330'
            },
            {
                id: 6,
                title: "Biyarni",
                img: Biyarni,
                name: 'Fried Rice',
                desc: '',
                price: '$110'
            },
            {
                id: 7,
                title: "fish",
                img: fish,
                name: 'grilled fish',
                desc: '',
                price: '$175'
            },
            {
                id: 8,
                title: "sandwich",
                img: sandwich,
                name: 'sandwich',
                desc: '',
                price: '$185'
            },
    ]
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 space-y-6'>
       {/* top section */}
       <div className="w-full flex items-center justify-between">
        <h5 className="text-xl text-neutral-700 font-semibold">
            Our Best Foods Menu
        </h5>
        <Link to={'/'} className='text-sm text-neutral-500 font-medium hover:text-yellow-500 ease-in-out duration-300'>
            View All
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 pb-4 gap-6">
  {menuData.map((data) => (
    <Link to="/" key={data.id} className="bg-neutral-400/10 hover:bg-neutral-400/20">
      <img
        src={data.img} alt="food" className="w-full aspect-[5/4] object-contain object-center" />
        <div className="space-y-4 px-2 py-4">
            <div className="space-y-1.5">
                <h6 className="text-xl text-neutral-700 font-semibold">
                    {data.name}
                </h6>
                <p className="text-sm text-neutral-400 font-normal line-clamp-1">
                   {data.desc} 
                </p>
            </div>
            <div className="flex items-center justify-between">
                <h6 className="text-2xl text-neutral-700 font-bold">
                    {data.price}
                </h6>
                <button className='w-fit px-3 py-1 bg-yellow-500 rounded-xl font-medium hover:bg-yellow-600/60 ease-in-out duration-300'>
                    Order Now
                </button>
            </div>
        </div>
    </Link>
  ))}
</div>

    </div>
  )
}

export default Menu
