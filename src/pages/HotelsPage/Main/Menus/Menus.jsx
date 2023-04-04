import React from "react";

import FindHotelForm from "./FindHotelForm/FindHotelForm";
import LikedList from "./LikedList/LikedList";
import styles from "./Menus.module.css";

export default function Menus() {
  return (
    <div className={styles.menus}>
      <FindHotelForm />
      <LikedList />
    </div>
  );
}
