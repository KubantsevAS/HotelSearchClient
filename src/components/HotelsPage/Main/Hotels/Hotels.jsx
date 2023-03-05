import React from 'react'
import Carousel from './Carousel/Carousel'
import ElementsContainer from './ElementsContainer/ElementsContainer'
import styles from './Hotels.module.css'

export default function Hotels() {
    return (
        <div className={styles.container}>
            <div>Title</div>
            <Carousel/>
            <ElementsContainer/>
        </div>
    )
}
