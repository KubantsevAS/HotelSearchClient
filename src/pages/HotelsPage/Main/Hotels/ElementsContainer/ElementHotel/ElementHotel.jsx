import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fullDateFormat, makeCorrectDaysText } from '../../../../../../common/otherConst';
import { heartActiveSvg, heartSvg, hotelPicSvg, hotelStarsSvg } from '../../../../../../images/svgCollector';
import { likeHotel, removeLikeFromHotel } from '../../../../../../redux/HotelReducer';
import { addNewHotel, removeFromLikedList } from '../../../../../../redux/LikedListReducer';
import styles from './ElementHotel.module.css';

const ElementHotel = ({ checkIn, days, stars, hotelId, priceAvg, hotelName, loading }) => {
    const likedList = useSelector(store => store.reducer.HotelReducer.likedId);
    const likedId = useSelector(store => store.reducer.HotelReducer.likedId);

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
        if (!likedId.includes(hotelId) ) {
            dispatch(likeHotel(hotelId));
            dispatch(addNewHotel({
                hotelId: hotelId, 
                hotelName: hotelName, 
                checkInDate, 
                daysInHotel: `${days} ${daysInHotel}`, 
                stars: stars, 
                priceAvg: priceAvg}));
        } else {
            dispatch(removeLikeFromHotel(hotelId));
            dispatch(removeFromLikedList(hotelId));
        }
        
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
