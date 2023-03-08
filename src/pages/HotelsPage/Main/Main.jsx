import React from "react";
import Hotels from "./Hotels/Hotels";
import Menus from "./Menus/Menus";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
      <Menus />
      <Hotels />
    </div>
  );
}
