import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import ElementHotel from './ElementHotel/ElementHotel';
import styles from './ElementsContainer.module.css';
import moment from 'moment';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { MAX_HOTEL_ITEMS } from '../../../../../api/consts';

export default function ElementsContainer({ loading }) {
    const hotels = useSelector(store => store.reducer.HotelReducer.hotels)
    const error = useSelector(store => store.reducer.HotelReducer.error)
    const checkIn = useSelector(store => store.reducer.HotelReducer.checkIn)
    const checkOut = useSelector(store => store.reducer.HotelReducer.checkOut)

    const test = useSelector(store => store.reducer.HotelReducer)

    console.log('test - ', test)
    const days = moment(checkOut.split('-')).diff(moment(checkIn.split('-')), 'days')

    const [shownHotels, setShownHotels] = useState(10);
    let likedId = useSelector(store => store.reducer.HotelReducer.likedId)

    const hasNextPage = shownHotels <= MAX_HOTEL_ITEMS; 

    const [sentryRef, { rootRef }] = useInfiniteScroll({
        loading,
        hasNextPage,
        onLoadMore: () => setShownHotels(shownHotels => shownHotels + 10),
        // When there is an error, we stop infinite loading.
        // It can be reactivated by setting "error" state as undefined.
        disabled: !!error,
        delayInMs: 300,
        // `rootMargin` is passed to `IntersectionObserver`.
        // We can use it to trigger 'onLoadMore' when the sentry comes near to become
        // visible, instead of becoming fully visible on the screen.
        rootMargin: '0px 0px 400px 0px',
      });

    return (
        <div>
            <div className={styles.liked}>Добавлено в избранное: <span>3</span> отеля

            </div>
            
            <div className={styles.itemsContainer} ref={rootRef}>
                {[...hotels].splice(0, shownHotels).map(hotel => 
                    <ElementHotel {...hotel} key={hotel.hotelId} days={days} checkIn={checkIn.split('-')} likedId={likedId}/>)
                }
                {(hasNextPage) && (
                    <div ref={sentryRef}><ElementHotel loading={true} /></div>
                )}
            </div>
        </div>
    )
}
