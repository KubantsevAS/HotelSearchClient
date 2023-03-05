import React from 'react'
import { useDispatch } from 'react-redux'
import { getHotelsData } from '../../../../../redux/HotelReducer';
import ElementHotel from './ElementHotel/ElementHotel';
import styles from './ElementsContainer.module.css'

export default function ElementsContainer() {

    const dispatch = useDispatch();

    const handleHotels = () => {
        dispatch(getHotelsData());
    }

    return (
        <div>
            <div className={styles.liked}>Добавлено в избранное: <span>3</span> отеля
                <button onClick={handleHotels}>HOTELS</button>
            </div>
            
            <div className={styles.itemsContainer}>
                <ElementHotel/>
            </div>
        </div>
    )
}
