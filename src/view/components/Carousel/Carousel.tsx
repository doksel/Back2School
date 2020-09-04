import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.scss";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7].map((el, index) => (
          <div key={index}>
            <h3>{el}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
