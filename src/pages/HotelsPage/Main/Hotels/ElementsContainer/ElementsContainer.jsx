/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import useInfiniteScroll from "react-infinite-scroll-hook";
import ElementHotel from "./ElementHotel/ElementHotel";
import styles from "./ElementsContainer.module.css";
import { MAX_HOTEL_ITEMS } from "../../../../../api/consts";
import { makeCorrectHotelsText } from "../../../../../common/otherConst";

export default function ElementsContainer({ loading }) {
  const hotels = useSelector((store) => store.reducer.HotelReducer.hotels);
  const error = useSelector((store) => store.reducer.HotelReducer.error);
  const checkIn = useSelector((store) => store.reducer.HotelReducer.checkIn);
  const checkOut = useSelector((store) => store.reducer.HotelReducer.checkOut);
  const likedList = useSelector((store) => store.reducer.HotelReducer.likedId);

  const likedHotelsText = makeCorrectHotelsText(likedList.length);

  const days = moment(checkOut.split("-")).diff(
    moment(checkIn.split("-")),
    "days"
  );

  const [shownHotels, setShownHotels] = useState(15);

  const hasNextPage = shownHotels <= MAX_HOTEL_ITEMS;

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: () => setShownHotels((shownHotelsArg) => shownHotelsArg + 10),
    disabled: !!error,
    delayInMs: 300,
    rootMargin: "0px 0px 400px 0px",
  });

  return (
    <div>
      <div className={styles.liked}>
        Добавлено в избранное: <span>{likedList.length}</span> {likedHotelsText}
      </div>

      <div className={styles.itemsContainer} ref={rootRef}>
        {[...hotels].splice(0, shownHotels).map((hotel) => (
          <ElementHotel
            {...hotel}
            key={hotel.hotelId}
            days={days}
            checkIn={checkIn.split("-")}
            likedList={likedList}
          />
        ))}
        {hasNextPage && (
          <div ref={sentryRef}>
            <ElementHotel loading />
          </div>
        )}
      </div>
    </div>
  );
}
