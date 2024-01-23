'use client';

import React from 'react'
import Slider  from "react-slick";
import Slide from './Slide';


const Hero = () => {
  
    var settings = {
        data:null,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
      };

      const slideData = [
        {
          id: 0,
          img: "/laptop-1.jpg",
          title: "Trending Item",
          mainTitle: " LATEST DESIGN SALE",
          price: "$20",
        },
        {
          id: 1,
          img: "/laptop-2.jpg",
          title: "Trending Accessories",
          mainTitle: "MODERN LAPTOPS",
          price: "$15",
        },
        {
          id: 2,
          img: "/ipad.jpg",
          title: "Sale Offer",
          mainTitle: "IPAD",
          price: "$30",
        },
      ];
  return (
    <div>
       <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
          
};

export default Hero