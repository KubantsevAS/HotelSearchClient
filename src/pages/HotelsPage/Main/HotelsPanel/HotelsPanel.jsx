import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fullDateFormat } from "../../../../common/otherConst";
import { arrowRightSvg } from "../../../../images/svgCollector";
import Carousel from "../../../../features/Carousel/Carousel";
import { getHotelsData } from "../../../../redux/HotelReducer";
import FoundHotelsContainer from "./FoundHotelsContainer/FoundHotelsContainer";
import styles from "./HotelsPanel.module.css";

export default function HotelsPanel() {
  const arrow = arrowRightSvg();
  const city = useSelector((store) => store.reducer.HotelReducer.location);
  const checkIn = useSelector((store) => store.reducer.HotelReducer.checkIn);
  const checkOut = useSelector((store) => store.reducer.HotelReducer.checkOut);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotelsData({ checkIn, checkOut }));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.destination}>
          Отели
          <span>{arrow}</span>
          {city}
        </div>
        <div className={styles.date}>{fullDateFormat(checkIn.split("-"))}</div>
      </div>
      <Carousel />
      <FoundHotelsContainer />
    </div>
  );
}
