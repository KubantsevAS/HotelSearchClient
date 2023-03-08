/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/function-component-definition */
import React from "react";
import { useDispatch } from "react-redux";
import {
  fullDateFormat,
  makeCorrectDaysText,
} from "../../../../../../common/otherConst";
import {
  heartActiveSvg,
  heartSvg,
  hotelPicSvg,
  hotelStarsSvg,
} from "../../../../../../images/svgCollector";
import {
  likeHotel,
  removeLikeFromHotel,
} from "../../../../../../redux/HotelReducer";
import {
  addNewHotel,
  removeFromLikedList,
} from "../../../../../../redux/LikedListReducer";
import styles from "./ElementHotel.module.css";

function ElementHotel({
  checkIn,
  days,
  stars,
  hotelId,
  priceAvg,
  hotelName,
  loading,
  likedList,
}) {
  const dispatch = useDispatch();

  if (loading) {
    return <div className={styles.block}>...loading</div>;
  }

  const checkInDate = fullDateFormat(checkIn);
  const daysInHotel = makeCorrectDaysText(days);

  const hotelPic = hotelPicSvg();
  const hotelStar = hotelStarsSvg(stars);
  const heart = heartSvg();
  const heartActive = heartActiveSvg();
  const pushLikeButton = () => {
    if (!likedList.includes(hotelId)) {
      dispatch(likeHotel(hotelId));
      dispatch(
        addNewHotel({
          hotelId,
          hotelName,
          checkInDate,
          daysInHotel: `${days} ${daysInHotel}`,
          stars,
          priceAvg,
        })
      );
    } else {
      dispatch(removeLikeFromHotel(hotelId));
      dispatch(removeFromLikedList(hotelId));
    }
  };

  return (
    <div className={styles.block} key={hotelId}>
      <div className={styles.container}>
        <div className={styles.pic}>{hotelPic}</div>

        <div className={styles.info}>
          <div className={styles.hotelTitle}>{hotelName}</div>
          <div className={styles.date}>
            {checkInDate}
            <span />
            {`${days} ${daysInHotel}`}
          </div>
          <div className={styles.stars}>{hotelStar}</div>
        </div>

        <div className={styles.likedPrice}>
          <div className={styles.heart} onClick={pushLikeButton}>
            {likedList.includes(hotelId) ? heartActive : heart}
          </div>
          <div className={styles.price}>
            <span className={styles.priceText}>Price:</span>
            <span className={styles.priceNumber}>{priceAvg} ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElementHotel;
