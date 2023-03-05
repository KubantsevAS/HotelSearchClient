import React from 'react'
import { heartSvg, hotelPicSvg, hotelStarsSvg } from '../../../../../../images/svgCollector'
import styles from './ElementHotel.module.css'

export default function ElementHotel() {
    return (
        <div className={styles.block}>
            <div className={styles.container}>

                <div className={styles.pic}>
                    {hotelPicSvg()}
                </div>

                <div className={styles.info}>
                    <div className={styles.hotelTitle}>Moscow Title</div>
                    <div className={styles.date}>Date <span></span> 1 day</div>
                    <div className={styles.stars}>
                        {hotelStarsSvg()}
                    </div>
                </div>

                <div className={styles.likedPrice}>
                    <div className={styles.heart}>
                        {heartSvg()}
                    </div>
                    <div className={styles.price}>
                        <span className={styles.priceText}>Price:</span>
                        <span className={styles.priceNumber}>23924 ₽</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
