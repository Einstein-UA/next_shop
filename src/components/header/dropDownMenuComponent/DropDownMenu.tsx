"use client";

import { useState, useContext } from "react";
import styles from "./dropDownMenu.module.scss";
import NavLinkComponent from "../navLinkComponent/NavLinkComponent";
import CartLinkComponent from "../cartLinkComponent/CartLinkComponent";
import ThemeButton from '../themeButtonComponent/ThemeButton'
import { ThemeContext } from "../../../context/themeContext";
import DropdownItemsPerPage from "../dropDownItemsPerPageComponent/DropdownItemsPerPage";
import DropdownCategories from "../dropDownCategoriesComponent/DropdownCategories";
import SearchComponent from "../searchComponent/SearchComponent";

export default function DropDownBtn() {
  const [isActive, setActive] = useState(false);
  const themeContext = useContext(ThemeContext)

  const handleActive = () => {
    setActive(!isActive);
  };

  return (
    <div className={styles.dropDownWrapper}>
      <div
      style={themeContext.themeData ? {background:"white"}:{background:"black"}}
        className={
          !isActive
            ? styles.dropDownMenu
            : `${styles.dropDownMenu} ${styles.dropDownMenuActive}`
        }
      >
        <NavLinkComponent setAction={setActive} navTo={"/"} title={"HOME"} />
        <NavLinkComponent setAction={setActive} navTo={"/products"} title={"STORE"} />
        <NavLinkComponent setAction={setActive} navTo={"/aboutUs"} title={"ABOUT US"} />
        <NavLinkComponent setAction={setActive} navTo={"/contactUs"} title={"CONTACT US"} />
        <NavLinkComponent setAction={setActive} navTo={"/login"} title={"LOG IN"} />

        <ThemeButton setAction={setActive}/>

        <DropdownItemsPerPage />

        <DropdownCategories />

        <SearchComponent setAction={setActive}/>

        <CartLinkComponent navTo={"/cart"} />
      </div>
      <button onClick={handleActive} className={styles.dropDownBtn}>
        <div
          className={
            !isActive
              ? styles.dropDownBtnItem
              : `${styles.dropDownBtnItem} ${styles.dropDownTopItemActive}`
          }
        ></div>
        <div
          className={
            !isActive
              ? styles.dropDownBtnItem
              : `${styles.dropDownBtnItem} ${styles.dropDownBottomItemActive}`
          }
        ></div>
      </button>
    </div>
  );
}
