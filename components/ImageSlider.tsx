// ImageSlider.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import mypic from "../assets/imges/1709677279796.jpg";

interface ImageSliderProps {
  slides: { title: string; description: string }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div style={{ marginBottom: 10 }}>
          <Card key={index} className="card-item-image-slider">
            <CardMedia
              sx={{
                width: 150,
                height: 110,

                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={mypic}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
              />
            </CardMedia>
            <CardContent>
              <Typography>{slide.title}</Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
