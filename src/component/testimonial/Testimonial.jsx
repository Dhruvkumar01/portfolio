import React from 'react'
import './testimonial.css'
import img1 from '../../asset/client1.jpg'
import img2 from '../../asset/client2.jpg'
import img3 from '../../asset/client3.jpg'

import {Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data=[
  {
    id:1,
    image: img1,
    name: "Rakesh Kumar",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis, maxime mollitia consequuntur vero nisi neque ipsum deleniti numquam voluptate?"
  },
  {
    id:2,
    image: img2,
    name: "Raju Kumar",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis, maxime mollitia consequuntur vero nisi neque ipsum deleniti numquam voluptate?"
  },
  {
    id:3,
    image: img3,
    name: "Rajeev ranjan",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis, maxime mollitia consequuntur vero nisi neque ipsum deleniti numquam voluptate?"
  }
];

const Testimonial = () => {
  return (
    <section id='testomonial'>
      <div className="section__heading">
        <h2>Testomonial By Real Clients</h2>
      </div>
      <Swiper 
        className="container testomonial__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {
          data.map(({id, image, name, review})=> {
            return(
              <SwiperSlide key={id} className='client'>
                <div className="client__image">
                  <img src={image} alt="client1" />
                </div>
                <h3 className='client__name text-primary'>{name}</h3>
                <div className="client__review">
                  <p>{review}</p>
                </div>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonial
