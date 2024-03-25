// ImageSlider.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";

interface ImageSliderProps {
  slides: { title: string; description: string }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2.8,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div>
          <div key={index} className="card-item-image-slider">
            <a href="/product_detail">
              <Typography>{slide.title}</Typography>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
