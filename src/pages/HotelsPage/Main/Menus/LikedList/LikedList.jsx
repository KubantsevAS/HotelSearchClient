import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './LikedList.module.css'
import LikedElement from './LikedElement/LikedElement'
import { sortListByStarsUp } from '../../../../../redux/LikedListReducer'

export default function Liked() {

    let hotels = useSelector(store => store.reducer.LikedListReducer.hotelsData);

    const arrowDisable = sortingArrowsDeactivatedSvg();
    const arrowUp = sortingArrowsUpSvg();
    const arrowDown = sortingArrowsDownSvg();

    const [starButtonState, setStarButtonState] = useState(false);
    const [starSort, setStarSort] = useState('down');
    
    const dispatch = useDispatch();

    
    const sortByStars = () => {
        if (starSort === 'down') {
            dispatch(sortListByStarsUp());
            setStarButtonState(true);
            setStarSort('up')
        } else if (starSort === 'up') {
            dispatch(sortListByStarsDown())
            setStarSort('down')
        }
    }
    const sortByPrice = () => {

    }

    return (
        <div className={styles.likedMenu}>
            <div className={styles.title}>Избранное</div>
            <div className={styles.sortbuttons}>
            <button className={styles.btn} onClick={sortByStars}>
                    <span>Рейтинг</span>
                    <span className={styles.arrow}>{!starButtonState ? arrowDisable : starSort === 'up' ? arrowUp : arrowDown}</span>
                </button>
                <button className={styles.btn}>
                    <span>Цена</span>
                    <span className={styles.arrow}>{arrowDisable}</span>
                </button>
            </div>

      <div className={styles.likedListContainer}>
        {hotels.map((hotel) => (
          <LikedElement {...hotel} key={hotel.hotelId} />
        ))}
      </div>
    </div>
  );
}
