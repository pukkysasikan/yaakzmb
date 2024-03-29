// ImageSlider.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";

interface ItemSliderProps {
  slides: { title: string; description: string }[];
}

const ImageSlider: React.FC<ItemSliderProps> = ({ slides }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div>
          <div key={index} className="card-item-slider">
            <a href="/stock_detail">
              <Typography>{slide.title}</Typography>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
