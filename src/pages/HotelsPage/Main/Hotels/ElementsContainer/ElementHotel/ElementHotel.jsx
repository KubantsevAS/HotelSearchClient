import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fullDateFormat, makeCorrectDaysText } from '../../../../../../common/otherConst';
import { heartActiveSvg, heartSvg, hotelPicSvg, hotelStarsSvg } from '../../../../../../images/svgCollector';
import { likeHotel } from '../../../../../../redux/HotelReducer';
import { addNewHotel } from '../../../../../../redux/LikedListReducer';
import styles from './ElementHotel.module.css';

const ElementHotel = ({ checkIn, days, stars, hotelId, priceAvg, hotelName, loading }) => {
    const likedList = useSelector(store => store.reducer.HotelReducer.likedId);
    const dispatch = useDispatch();
    
    if (loading) {
        return <div className={styles.block}>...loading</div>
    }

    let checkInDate = fullDateFormat(checkIn);
    let daysInHotel = makeCorrectDaysText(days);
    
    const hotelPic = hotelPicSvg();
    const hotelStar = hotelStarsSvg(stars);
    const heart = heartSvg();
    const heartActive = heartActiveSvg();
    const pushLikeButton = () => {
        // dispatch(likeHotel(hotelId))
        // dispatch(addNewHotel({hotelId, checkInDate, daysInHotel, stars, priceAvg}))
    }
    
    return (
        <div className={styles.block} key={hotelId}>
            <div className={styles.container}>

                <div className={styles.pic}>
                    {hotelPic}
                </div>

                <div className={styles.info}>
                    <div className={styles.hotelTitle}>{hotelName}</div>
                    <div className={styles.date}>
                        {checkInDate}
                        <span></span>
                        {`${days} ${daysInHotel}`}
                    </div>
                    <div className={styles.stars}>
                        {hotelStar}
                    </div>
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
    )
}

export default ElementHotel;
