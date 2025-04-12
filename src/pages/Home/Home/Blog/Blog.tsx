import React from 'react'
import { FaCalendar } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import blog1 from '../../../../assets/blog1.jpg'

function Blog() {

    const blogData = [
       {
        id: 1,
        image: blog1,
        title: 'A Burger Journey',
        publishdate: '23 jan, 2025',
        author: 'J-tech',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quod neque animi debitis non enim nesciunt repudiandae culpa saepe',
       },
       {
        id: 2,
        image: 'https://images.unsplash.com/photo-1735190093631-d66ecd1bc433?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBuZyUyMGZvb2QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
        title: 'Good Food Good Time',
        publishdate: '23 march, 2024',
        author: 'JA-Foods',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quod neque animi debitis non enim nesciunt repudiandae culpa saepe',
       },
       {
        id: 3,
        image: 'https://images.unsplash.com/photo-1654683413645-d8d15189384c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBuZyUyMGZvb2QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
        title: 'Family time',
        publishdate: '02 april 2025',
        author: 'G-tech',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quod neque animi debitis non enim nesciunt repudiandae culpa saepe',
       }
    ]
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 pb-6 space-y-6'>
       <div className="w-full flex items-center justify-between">
        <h5 className="text-xl text-neutral-700 font-semibold">
             Explore our Blog
        </h5>
        <Link to={'/'} className='text-sm text-neutral-500 font-medium hover:text-yellow-500 ease-in-out duration-300'>
            View All
        </Link>
      </div>

      {/*  */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {blogData.map((data) => (
            <Link to={'/'} key={data.id} className='w-full space-y-3'>
                <img src={data.image} alt="blog image" className='w-full aspect-video object-center object-cover rounded-xl' />
                <div className="px-2 space-y-1.5">
                    <div className="flex items-center gap-x-5">
                        <div className="flex items-center gap-x-1.5 text-sm text-neutral-500/70">
                        <FaCircleUser /> <span className='text-neutral-500'>{data.author}</span>
                        </div>
                        <div className="flex items-center gap-x-1.5 text-sm text-neutral-500/70">
                        <FaCalendar /> <span className='text-neutral-500'>{data.publishdate}</span>
                        </div>
                    </div>
                    <h5 className='text-xl text-neutral-700 font-semibold line-clamp-2'>
                        {data.title}
                    </h5>
                    <p className='text-sm text-neutral-500 line-clamp-2'>
                        {data.desc}
                    </p>
                </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog
