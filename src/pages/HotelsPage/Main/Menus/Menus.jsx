import React from "react";
import FindHotel from "./FindHotel/FindHotel";
import LikedList from "./LikedList/LikedList";
import styles from "./Menus.module.css";

export default function Menus() {
  return (
    <div className={styles.menus}>
      <FindHotel />
      <LikedList />
    </div>
  );
}
