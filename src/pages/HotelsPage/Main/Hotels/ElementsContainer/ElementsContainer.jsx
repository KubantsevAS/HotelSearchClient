import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotelsData } from '../../../../../redux/HotelReducer';
import ElementHotel from './ElementHotel/ElementHotel';
import styles from './ElementsContainer.module.css';
import moment from 'moment';

export default function ElementsContainer() {

    const dispatch = useDispatch();
    let hotels = useSelector(store => store.reducer.HotelReducer.hotels)
    let checkIn = useSelector(store => store.reducer.HotelReducer.checkIn)
    let checkOut = useSelector(store => store.reducer.HotelReducer.checkOut)
    let location = useSelector(store => store.reducer.HotelReducer.location)

    let days = moment(checkOut.split('-')).diff(moment(checkIn.split('-')), 'days')
    
    const handleHotels = () => {
        dispatch(getHotelsData({location, checkIn, checkOut}));
    }

    useEffect(() => {
        handleHotels();
    }, [])

    return (
        <div>
            <div className={styles.liked}>Добавлено в избранное: <span>3</span> отеля

            </div>
            
            <div className={styles.itemsContainer}>
                {hotels.map(hotel => <ElementHotel {...hotel} key={hotel.hotelId} days={days} checkIn={checkIn.split('-')}/>)}
            </div>
        </div>
    )
}
