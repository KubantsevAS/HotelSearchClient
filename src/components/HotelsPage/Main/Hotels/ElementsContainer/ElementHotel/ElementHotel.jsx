import React from 'react';
import { heartSvg, hotelPicSvg, hotelStarsSvg } from '../../../../../../images/svgCollector';
import styles from './ElementHotel.module.css';

export default function ElementHotel(props) {

    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    
    let newArr = props.days.toString().split('');

    const makeCorrectDaysText = (dayFormat) => {
        if (dayFormat < 10) {
            return dayFormat === 1 ? 'день' : dayFormat > 1 && dayFormat < 5 ? `дня` : `дней`
        } else if (dayFormat > 20) {
            return +newArr[newArr.length - 1] === 1 ? 'день' : newArr[newArr.length - 1] > 1 && newArr[newArr.length - 1] < 5 ? `дня` : `дней`
        } else return 'дней'
    }
    
    return (
        <div className={styles.block}>
            <div className={styles.container}>

                <div className={styles.pic}>
                    {hotelPicSvg()}
                </div>

                <div className={styles.info}>
                    <div className={styles.hotelTitle}>{props.hotelName}</div>
                    <div className={styles.date}>
                        {`${+props.checkIn[2]} ${months[+props.checkIn[1] - 1]} ${props.checkIn[0]}`}
                        <span></span>
                        {`${props.days} ${makeCorrectDaysText(props.days)}`}
                    </div>
                    <div className={styles.stars}>
                        {hotelStarsSvg(props.stars)}
                    </div>
                </div>

                <div className={styles.likedPrice}>
                    <div className={styles.heart}>
                        {heartSvg()}
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
