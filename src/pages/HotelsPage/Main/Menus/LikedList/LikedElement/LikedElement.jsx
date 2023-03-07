import React from 'react'
import styles from './LikedElement.module.css'
import { heartActiveSvg, hotelStarsSvg } from '../../../../../../images/svgCollector';
import { fullDateFormat, makeCorrectDaysText } from '../../../../../../common/otherConst';
import { useDispatch } from 'react-redux';
import { removeLikeFromHotel } from '../../../../../../redux/HotelReducer';
import { removeFromLikedList } from '../../../../../../redux/LikedListReducer';

export default function LikedElement(props) {

    const hotelStar = hotelStarsSvg(props.stars);
    const heartActive = heartActiveSvg();

    const dispatch = useDispatch();
    const pushLikeButton = () => {
        dispatch(removeLikeFromHotel(props.hotelId));
        dispatch(removeFromLikedList(props.hotelId));
    }


    return (
        
            <div className={styles.block}>
                <div className={styles.container}>

                    <div className={styles.info}>
                        <div className={styles.title_heart}>
                            <div className={styles.hotelTitle}>{props.hotelName}</div>
                            <div className={styles.heart} onClick={pushLikeButton}>
                                {heartActive}
                            </div>
                        </div>

                        <div className={styles.date}>
                            {props.checkInDate}
                            <span></span>
                            {`${props.daysInHotel}`}
                        </div>

                    </div>

                    <div className={styles.starsPrice}>
                        <div className={styles.stars}>
                            {hotelStar}
                        </div>

                        <div className={styles.price}>
                            <span className={styles.priceText}>Price:</span>
                            <span className={styles.priceNumber}>{props.priceAvg} ₽</span>
                        </div>
                    </div>

                </div>
            </div>
        
    )
}
