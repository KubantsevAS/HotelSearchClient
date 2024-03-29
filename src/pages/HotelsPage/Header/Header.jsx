/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { useDispatch } from "react-redux";
import { exitButtonSvg } from "../../../images/svgCollector";
import { setLogout } from "../../../redux/AuthReducer";
import styles from "./Header.module.css";

export default function Header() {
  const exitButton = exitButtonSvg();
  const dispatch = useDispatch();
  const exitPage = () => {
    dispatch(setLogout());
  };

  return (
    <div className={styles.header}>
      <div className={styles.title}>Simple Hotel Check</div>
      <div className={styles.exit} onClick={exitPage}>
        Выйти {exitButton}
      </div>
    </div>
  );
}
