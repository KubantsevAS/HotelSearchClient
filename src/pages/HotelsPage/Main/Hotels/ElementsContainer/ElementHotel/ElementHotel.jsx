import React from 'react'
import { heartSvg, hotelPicSvg, hotelStarsSvg } from '../../../../../../images/svgCollector'
import styles from './ElementHotel.module.css'

export default function ElementHotel(props) {

    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'] 
    let day = props.days.split(' ')[0];

    if (props.days === 'a day') {
        day = 1
    } else day = props.days.split(' ')[0]

    let dayFormat = day === 1 ? '1 день' : day  < 5 ? `${day} дня` : `${day} дней`

    
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
                        {dayFormat}</div>
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
