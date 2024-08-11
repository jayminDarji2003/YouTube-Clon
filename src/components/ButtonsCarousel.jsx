// for carousel in ButtonsCarousel

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { navItemLinks } from "../constants";

const ButtonsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true, // Disable arrows for navigation
    speed: 100,
    slidesToShow: 14,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {navItemLinks.map((item, index) => (
          <div key={index}>
            <button className="bg-[#272727] text-white font-bold p-1 rounded-lg px-4">
              {item.name}
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ButtonsCarousel;
