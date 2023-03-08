/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";
import car1 from "../../../../../images/carousel1.png";
import car2 from "../../../../../images/carousel2.png";
import car3 from "../../../../../images/carousel3.png";
import car4 from "../../../../../images/carousel5.png";

const handleDragStart = (e) => e.preventDefault();

// const responsive = {
//   0: { items: 1 },
//   568: { items: 2 },
//   1024: { items: 3 },
// };

const items = [
  <img
    src={car1}
    onDragStart={handleDragStart}
    role="presentation"
    alt="carousel element"
    className="imgForCarousel"
    data-value="1"
  />,
  <img
    src={car2}
    onDragStart={handleDragStart}
    role="presentation"
    alt="carousel element"
    className="imgForCarousel"
    data-value="2"
  />,
  <img
    src={car3}
    onDragStart={handleDragStart}
    role="presentation"
    alt="carousel element"
    className="imgForCarousel"
    data-value="3"
  />,
  <img
    src={car4}
    onDragStart={handleDragStart}
    role="presentation"
    alt="carousel element"
    className="imgForCarousel"
    data-value="4"
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

// const items = [
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
// ];

// export default function Carousel() {
//   return <AliceCarousel mouseTracking items={items} />;
// }
