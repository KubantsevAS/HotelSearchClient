import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginForm from "../../features/LoginForm/LoginForm";
import styles from "./AuthPage.module.css";

export default function AuthPage() {
  const auth = useSelector((store) => store.reducer.AuthReducer.auth);
  if (auth) {
    return <Navigate to="/hotels" />;
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.pic}></div>
      <div className={styles.loginWindow}>
        <div className={styles.loginTitle}>Simple Hotel Check</div>
        <div className={styles.loginForm}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
