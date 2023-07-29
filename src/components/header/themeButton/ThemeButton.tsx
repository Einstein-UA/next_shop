"use client";

import styles from "../header.module.scss";
import Image from "next/image";
import moon from "../../../images/header/moon.png";
import sun from "../../../images/header/sun.png";
import { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";

export default function Button() {
  const themeContext = useContext(ThemeContext);

  const onHandleClick = () => {
    themeContext.setThemeData(!themeContext.themeData);
  };

  return (
    <div className={styles.themeButtonwrapper}>
      <button onClick={onHandleClick} className={styles.themeButton}>
        <div className={styles.themeButtonContent}>
          <div
            className={
              themeContext.themeData
                ? `${styles.themeButtonTogglerDark} ${styles.themeButtonTogglerWhite}`
                : styles.themeButtonTogglerDark
            }
          ></div>
          <div className={styles.sunWrapper}>
            <Image src={sun} width={20} height={20} alt="sun" />
          </div>
          <div className={styles.moonWrapper}>
            <Image src={moon} width={15} height={15} alt="moon" />
          </div>
        </div>
      </button>
    </div>
  );
}
