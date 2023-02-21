import React from "react";
import Slider from "react-slick";
import Divslides1 from "./divslide1";
import Divslides2 from "./divslide2";
import Divslides3 from "./divslide3";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <Slider {...settings} className="carousel">
      <div>
        <Divslides1/>
      </div>
      <div>
        <Divslides2/>
      </div>
      <div>
        <Divslides3/>
      </div>
    </Slider>
  );
}