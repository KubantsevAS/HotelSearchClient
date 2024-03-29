import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";
import car1 from "../../images/Carousel1.png";
import car2 from "../../images/Carousel2.png";
import car3 from "../../images/Carousel3.png";
import car4 from "../../images/Carousel5.png";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src={car1}
    role="presentation"
    className="imgForCarousel"
    alt="carouselItem"
    onDragStart={handleDragStart}
  />,
  <img
    src={car2}
    role="presentation"
    className="imgForCarousel"
    alt="carouselItem"
    onDragStart={handleDragStart}
  />,
  <img
    src={car3}
    role="presentation"
    className="imgForCarousel"
    alt="carouselItem"
    onDragStart={handleDragStart}
  />,
  <img
    src={car4}
    role="presentation"
    className="imgForCarousel"
    alt="carouselItem"
    onDragStart={handleDragStart}
  />,
];

const responsive = {
  0: {
    items: 1,
  },
  568: {
    items: 2,
  },
  1024: {
    items: 3,
  },
};

export default function Carousel() {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      infinite
      disableButtonsControls
      disableDotsControls
    />
  );
}
