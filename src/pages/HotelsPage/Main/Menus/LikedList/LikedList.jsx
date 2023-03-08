/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./LikedList.module.css";
import LikedElement from "./LikedElement/LikedElement";
import {
  sortListByStarsUp,
  sortListByStarsDown,
  sortListByPriceUp,
  sortListByPriceDown,
} from "../../../../../redux/LikedListReducer";
import {
  sortingArrowsDeactivatedSvg,
  sortingArrowsDownSvg,
  sortingArrowsUpSvg,
} from "../../../../../images/svgCollector";

export default function Liked() {
  const hotels = useSelector(
    (store) => store.reducer.LikedListReducer.hotelsData
  );

  const arrowDisable = sortingArrowsDeactivatedSvg();
  const arrowUp = sortingArrowsUpSvg();
  const arrowDown = sortingArrowsDownSvg();

  const [starBtnDisable, setStarBtnDisable] = useState(false);
  const [priceBtnDisable, setPriceBtnDisable] = useState(false);

  const [starSort, setStarSort] = useState("down");
  const [priceSort, setPriceSort] = useState("down");

  const dispatch = useDispatch();

  const sortByStars = () => {
    setStarBtnDisable(true);
    setPriceBtnDisable(false);
    setPriceSort("down");
    if (starSort === "down") {
      dispatch(sortListByStarsUp());
      setStarSort("up");
    } else if (starSort === "up") {
      dispatch(sortListByStarsDown());
      setStarSort("down");
    }
  };

  const sortByPrice = () => {
    setStarBtnDisable(false);
    setPriceBtnDisable(true);
    setStarSort("down");
    if (priceSort === "down") {
      dispatch(sortListByPriceUp());
      setPriceSort("up");
    } else if (priceSort === "up") {
      dispatch(sortListByPriceDown());
      setPriceSort("down");
    }
  };

  //  const sortByPrice = () => {}

  return (
    <div className={styles.likedMenu}>
      <div className={styles.title}>Избранное</div>
      <div className={styles.sortbuttons}>
        <button
          className={`${styles.btn} ${
            !starBtnDisable ? styles.btnDis : styles.btnActive
          }`}
          onClick={sortByStars}
          type="button"
        >
          <span>Рейтинг</span>
          <span className={styles.arrow}>
            {!starBtnDisable
              ? arrowDisable
              : starSort === "up"
              ? arrowUp
              : arrowDown}
          </span>
        </button>
        <button
          className={`${styles.btn} ${
            !priceBtnDisable ? styles.btnDis : styles.btnActive
          }`}
          type="button"
          onClick={sortByPrice}
        >
          <span>Цена</span>
          <span className={styles.arrow}>
            {!priceBtnDisable
              ? arrowDisable
              : priceSort === "up"
              ? arrowUp
              : arrowDown}
          </span>
        </button>
      </div>

      <div className={styles.likedListContainer}>
        {hotels.map((hotel) => (
          <LikedElement
            key={hotel.hotelId}
            hotelId={hotel.hotelId}
            stars={hotel.stars}
            hotelName={hotel.hotelName}
            checkInDate={hotel.checkInDate}
            daysInHotel={hotel.daysInHotel}
            priceAvg={hotel.priceAvg}
          />
        ))}
      </div>
    </div>
  );
}
