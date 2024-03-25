// ImageSlider.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";

interface ItemRewarsSlidersProps {
  slides: { title: string; description: string }[];
}

const ItemRewarsSliders: React.FC<ItemRewarsSlidersProps> = ({ slides }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2.6,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div>
          <div key={index} className="card-item-image-slider">
            <a href="/detail_reward">
              <Typography>{slide.title}</Typography>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ItemRewarsSliders;
