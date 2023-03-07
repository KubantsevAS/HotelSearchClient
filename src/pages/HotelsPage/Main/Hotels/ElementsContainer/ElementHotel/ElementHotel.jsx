import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fullDateFormat, makeCorrectDaysText } from '../../../../../../common/otherConst';
import { heartActiveSvg, heartSvg, hotelPicSvg, hotelStarsSvg } from '../../../../../../images/svgCollector';
import { likeHotel, removeLikeFromHotel } from '../../../../../../redux/HotelReducer';
import { addNewHotel, removeFromLikedList } from '../../../../../../redux/LikedListReducer';
import styles from './ElementHotel.module.css';

export default function ElementHotel(props) {

    let checkInDate = fullDateFormat(props.checkIn);
    let daysInHotel = makeCorrectDaysText(props.days);
    
    const hotelPic = hotelPicSvg();
    const hotelStar = hotelStarsSvg(props.stars);
    const heart = heartSvg();
    const heartActive = heartActiveSvg();

    const likedList = useSelector(store => store.reducer.HotelReducer.likedId);

    const dispatch = useDispatch();
    const pushLikeButton = () => {
        if (!props.likedId.includes(props.hotelId) ) {
            dispatch(likeHotel(props.hotelId));
            dispatch(addNewHotel({hotelId: props.hotelId, checkInDate, daysInHotel, stars: props.stars, priceAvg: props.priceAvg}));
        } else {
            dispatch(removeLikeFromHotel(props.hotelId));
            dispatch(removeFromLikedList(props.hotelId));
        }
        
    }
    
    
    return (
        <div className={styles.block}>
            <div className={styles.container}>

                <div className={styles.pic}>
                    {hotelPic}
                </div>

                <div className={styles.info}>
                    <div className={styles.hotelTitle}>{props.hotelName}</div>
                    <div className={styles.date}>
                        {checkInDate}
                        <span></span>
                        {`${props.days} ${daysInHotel}`}
                    </div>
                    <div className={styles.stars}>
                        {hotelStar}
                    </div>
                </div>

                <div className={styles.likedPrice}>
                    <div className={styles.heart} onClick={pushLikeButton}>
                        {likedList.includes(props.hotelId) ? heartActive : heart}
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
