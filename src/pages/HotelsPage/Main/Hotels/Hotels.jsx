import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fullDateFormat } from '../../../../common/otherConst'
import { arrowRightSvg } from '../../../../images/svgCollector'
import Carousel from './Carousel/Carousel'
import { getHotelsData } from '../../../../redux/HotelReducer';

import ElementsContainer from './ElementsContainer/ElementsContainer'
import styles from './Hotels.module.css'

export default function Hotels() {
    const arrow = arrowRightSvg();
    const city = useSelector(store => store.reducer.HotelReducer.location);
    const checkIn = useSelector(store => store.reducer.HotelReducer.checkIn);
    const checkOut = useSelector(store => store.reducer.HotelReducer.checkOut)

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('HERE')
        dispatch(getHotelsData({checkIn, checkOut}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.destination}>Отели<span>{arrow}</span>{city}</div>
                <div className={styles.date}>{fullDateFormat(checkIn).split('-')}</div>
            </div>
            <Carousel/>
            <ElementsContainer/>
        </div>
    )
}
