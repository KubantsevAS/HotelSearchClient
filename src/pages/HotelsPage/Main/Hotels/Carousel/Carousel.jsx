/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import styles from "./Carousel.module.css";
import car1 from "./../../../../../images/carousel1.png";
import car2 from "./../../../../../images/carousel2.png";
import car3 from "./../../../../../images/carousel3.png";
import car4 from "./../../../../../images/carousel5.png";

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
