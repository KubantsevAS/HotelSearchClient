import React from 'react'
import { Form } from 'react-final-form';
import { HotelApi } from '../../api/api';
import styles from './AuthPage.module.css'
import LoginForm from './LoginForm/LoginForm';

export default function AuthPage() {
    HotelApi.getHotelItems();
  return (
    <div className={styles.authPage}>
        <div className={styles.pic}></div>
        <div className={styles.loginWindow}>
            <div className={styles.loginTitle}>Simple Hotel Check</div>
            <div className={styles.loginForm}>
              <LoginForm/>
            </div>
        </div>
    </div>
  )
}
