import React from 'react'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import hero1 from '../../../assets/hero1.png'
import hero2 from '../../../assets/hero2.png'
import hero3 from '../../../assets/hero3.png'
import hero4 from '../../../assets/hero4.png'
import hero5 from '../../../assets/hero5.png'


import { Autoplay, EffectCards } from 'swiper/modules';


function Slider() {
    return (
        <div>
          <Swiper
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay,EffectCards]}
            className="mySwiper [&_.swiper-wrapper]:!ease-linear"
          >
            <SwiperSlide>
                 <img src={hero1} alt="hero img" className="w-full aspect-square object-contain object-center" />
            </SwiperSlide>
            <SwiperSlide>
                 <img src={hero2} alt="hero img" className="w-full aspect-square object-contain object-center" />
            </SwiperSlide>
            <SwiperSlide>
                 <img src={hero3} alt="hero img" className="w-full aspect-square object-contain object-center" />
            </SwiperSlide>
            <SwiperSlide>
                 <img src={hero4} alt="hero img" className="w-full aspect-square object-contain object-center" />
            </SwiperSlide>
            <SwiperSlide>
                 <img src={hero5} alt="hero img" className="w-full aspect-square object-contain object-center" />
            </SwiperSlide>
          </Swiper>
        </div>
      );
    }

export default Slider;
