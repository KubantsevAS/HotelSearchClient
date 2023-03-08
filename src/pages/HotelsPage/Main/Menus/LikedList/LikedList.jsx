import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./LikedList.module.css";
import LikedElement from "./LikedElement/LikedElement";
import { sortListByStarsUp } from "../../../../../redux/LikedListReducer";

export default function Liked() {
  let hotels = useSelector(
    (store) => store.reducer.LikedListReducer.hotelsData
  );

  const dispatch = useDispatch();

  const sortByStarsUp = () => {
    dispatch(sortListByStarsUp());
  };

  const sortByStarsDown = () => {};

  const sortByPrice = () => {};

  return (
    <div className={styles.likedMenu}>
      <div className={styles.title}>Избранное</div>
      <div className={styles.sortbuttons}>
        <button className={styles.btn} onClick={sortByStarsUp}>
          Рейтинг
        </button>
        <button className={styles.btn}>Цена</button>
      </div>

      <div className={styles.likedListContainer}>
        {hotels.map((hotel) => (
          <LikedElement {...hotel} key={hotel.hotelId} />
        ))}
      </div>
    </div>
  );
}
