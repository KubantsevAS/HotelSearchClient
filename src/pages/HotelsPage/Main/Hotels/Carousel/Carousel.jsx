import React from "react";
import styles from "./Carousel.module.css";
import car1 from "../../../../../images/carousel1.png";
import car2 from "../../../../../images/carousel2.png";
import car3 from "../../../../../images/carousel3.png";
import car4 from "../../../../../images/carousel5.png";

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <img src={car1} alt="carousel element" className={styles.item} />
      <img src={car2} alt="carousel element" className={styles.item} />
      <img src={car3} alt="carousel element" className={styles.item} />
      <img src={car4} alt="carousel element" className={styles.item} />
    </div>
  );
}
