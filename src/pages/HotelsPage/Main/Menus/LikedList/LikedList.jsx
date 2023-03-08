/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./LikedList.module.css";
import LikedElement from "./LikedElement/LikedElement";
import {
  sortListByStarsUp,
  sortListByStarsDown,
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
  const [starButtonState, setStarButtonState] = useState(false);
  const [starSort, setStarSort] = useState("down");

  const dispatch = useDispatch();

  const sortByStars = () => {
    if (starSort === "down") {
      dispatch(sortListByStarsUp());
      setStarButtonState(true);
      setStarSort("up");
    } else if (starSort === "up") {
      dispatch(sortListByStarsDown());
      setStarSort("down");
    }
  };

  //  const sortByPrice = () => {}

  return (
    <div className={styles.likedMenu}>
      <div className={styles.title}>Избранное</div>
      <div className={styles.sortbuttons}>
        <button className={styles.btn} onClick={sortByStars} type="button">
          <span>Рейтинг</span>
          <span className={styles.arrow}>
            {!starButtonState
              ? arrowDisable
              : starSort === "up"
              ? arrowUp
              : arrowDown}
          </span>
        </button>
        <button className={styles.btn} type="button">
          <span>Цена</span>
          <span className={styles.arrow}>{arrowDisable}</span>
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
