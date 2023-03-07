import React from 'react'
import { useSelector } from 'react-redux'
import { fullDateFormat } from '../../../../common/otherConst'
import { arrowRightSvg } from '../../../../images/svgCollector'
import Carousel from './Carousel/Carousel'
import ElementsContainer from './ElementsContainer/ElementsContainer'
import styles from './Hotels.module.css'

export default function Hotels() {

    const arrow = arrowRightSvg();
    const city = useSelector(store => store.reducer.HotelReducer.location);
    const checkIn = fullDateFormat(useSelector(store => store.reducer.HotelReducer.checkIn).split('-'));
    
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.destination}>Отели<span>{arrow}</span>{city}</div>
                <div className={styles.date}>{checkIn}</div>
            </div>
            <Carousel/>
            <ElementsContainer/>
        </div>
    )
}
