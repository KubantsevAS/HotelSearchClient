import React from "react";
import { useSelector } from "react-redux";

import styles from "./LikedList.module.css";
import LikedHotelItem from "./LikedHotelItem/LikedHotelItem";
import SortingButtons from "../../../../../features/SortingButtons/SortingButtons";

export default function Liked() {
  const hotels = useSelector(
    (store) => store.reducer.LikedListReducer.hotelsData
  );

  return (
    <div className={styles.likedMenu}>
      <div className={styles.title}>Избранное</div>

      <SortingButtons />

      <div className={styles.likedListContainer}>
        {!hotels.length && <h2>Список избранных пуст</h2>}
        {hotels.map((hotel) => (
          <LikedHotelItem
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
