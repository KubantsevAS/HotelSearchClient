import React from 'react'
import styles from './Liked.module.css'

export default function Liked() {
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
