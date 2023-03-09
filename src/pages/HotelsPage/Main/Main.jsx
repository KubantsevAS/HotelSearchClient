import React from "react";
import HotelsPanel from "./HotelsPanel/HotelsPanel";
import Menus from "./Menus/Menus";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
      <Menus />
      <HotelsPanel />
    </div>
  );
}
