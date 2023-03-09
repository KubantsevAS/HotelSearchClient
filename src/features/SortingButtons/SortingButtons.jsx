/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  sortListByStarsUp,
  sortListByStarsDown,
  sortListByPriceUp,
  sortListByPriceDown,
} from "../../redux/LikedListReducer";
import {
  sortingArrowsDeactivatedSvg,
  sortingArrowsDownSvg,
  sortingArrowsUpSvg,
} from "../../images/svgCollector";
import styles from "./SortingButtons.module.css";

export default function SortingButtons() {
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
  return (
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
  );
}
