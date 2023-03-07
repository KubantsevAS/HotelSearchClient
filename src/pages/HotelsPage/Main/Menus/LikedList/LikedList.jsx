import React from 'react'
import { useSelector } from 'react-redux'
import styles from './LikedList.module.css'

export default function Liked() {

    let hotels = useSelector(store => store.reducer.LikedListReducer.hotelsData)
    console.log(hotels)
    return (
        <div className={styles.likedMenu}>
            <div className={styles.title}>Избранное</div>
            <div>
                <button>Рейтинг</button><button>Цена</button>
            </div>
            <div>HotelContainer</div>
        </div>
    )
}
