import React from 'react'
import ElementsContainer from './ElementsContainer/ElementsContainer'
import styles from './Hotels.module.css'

export default function Hotels() {
    return (
        <div className={styles.container}>
            <div>Title</div>
            <div>Caroosel</div>
            <ElementsContainer/>
        </div>
    )
}
