/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { useDispatch } from "react-redux";
import styles from "./LikedElement.module.css";
import {
  heartActiveSvg,
  hotelStarsSvg,
} from "../../../../../../images/svgCollector";
import { removeLikeFromHotel } from "../../../../../../redux/HotelReducer";
import { removeFromLikedList } from "../../../../../../redux/LikedListReducer";

export default function LikedElement({
  hotelId,
  stars,
  hotelName,
  checkInDate,
  daysInHotel,
  priceAvg,
}) {
  const hotelStar = hotelStarsSvg(stars);
  const heartActive = heartActiveSvg();

  const dispatch = useDispatch();
  const pushLikeButton = () => {
    dispatch(removeLikeFromHotel(hotelId));
    dispatch(removeFromLikedList(hotelId));
  };

  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.title_heart}>
            <div className={styles.hotelTitle}>{hotelName}</div>
            <div className={styles.heart} onClick={pushLikeButton}>
              {heartActive}
            </div>
          </div>

          <div className={styles.date}>
            {checkInDate}
            <span />
            {`${daysInHotel}`}
          </div>
        </div>

        <div className={styles.starsPrice}>
          <div className={styles.stars}>{hotelStar}</div>

          <div className={styles.price}>
            <span className={styles.priceText}>Price:</span>
            <span className={styles.priceNumber}>{priceAvg} ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
}
