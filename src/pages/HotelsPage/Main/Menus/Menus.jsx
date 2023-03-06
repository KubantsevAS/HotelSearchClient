import React from 'react'
import FindHotel from './FindHotel/FindHotel'
import Liked from './Liked/Liked'
import styles from './Menus.module.css'

export default function Menus() {
    return (
        <div className={styles.menus}>
            <FindHotel/>
            <Liked/>
        </div>
    )
}
