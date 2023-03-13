/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import useInfiniteScroll from "react-infinite-scroll-hook";
import HotelItem from "./HotelItem/HotelItem";
import styles from "./FoundHotelsContainer.module.css";
import { MAX_HOTEL_ITEMS } from "../../../../../api/consts";
import { makeCorrectHotelsText } from "../../../../../common/otherConst";

export default function FoundHotelsContainer({ loading }) {
  const hotels = useSelector((store) => store.reducer.HotelReducer.hotels);
  const error = useSelector((store) => store.reducer.HotelReducer.error);
  const checkIn = useSelector((store) => store.reducer.HotelReducer.checkIn);
  const checkOut = useSelector((store) => store.reducer.HotelReducer.checkOut);
  const likedList = useSelector((store) => store.reducer.HotelReducer.likedId);

  const likedHotelsText = makeCorrectHotelsText(likedList.length);

  const formatCheckIn = moment(checkIn, "YYYY-MM-DD");
  const formatCheckOut = moment(checkOut, "YYYY-MM-DD");
  const days = formatCheckOut.diff(formatCheckIn, "days");

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
          <HotelItem
            {...hotel}
            key={hotel.hotelId}
            days={days}
            checkIn={checkIn.split("-")}
            likedList={likedList}
          />
        ))}
        {hasNextPage && (
          <div ref={sentryRef}>
            <HotelItem loading />
          </div>
        )}
      </div>
    </div>
  );
}
