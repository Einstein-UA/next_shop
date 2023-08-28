"use client";
import styles from "./searchComponent.module.scss";
import Image from "next/image";
import searchBtnWhite from "../../../images/header/searchIcon.png";
import searchBtnDark from "../../../images/header/searchIconDarck.png";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

interface Props {
  setAction?: any;
}

export default function SearchComponent({ setAction }:Props) {
  const themeContext = useContext(ThemeContext);
  const onSearchBtnHandleClick = (event: React.FormEvent) => {
    event.preventDefault();
    setAction(false)
  };

  return (
    <form className={styles.searchWrapper}>
      <input
        className={styles.inputSearchStyles}
        type="search"
        placeholder="Search"
      />
      <button
        onClick={onSearchBtnHandleClick}
        className={styles.searchBtnStyles}
      >
        {!themeContext.themeData ? (
          <Image
            className={styles.serchIcon}
            src={searchBtnWhite}
            width={20}
            height={20}
            alt="search button"
          />
        ) : (
          <Image
            className={styles.serchIcon}
            src={searchBtnDark}
            width={20}
            height={20}
            alt="search button"
          />
        )}
      </button>
    </form>
  );
}
