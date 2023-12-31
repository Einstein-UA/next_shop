"use client";

import {useState, useContext} from "react";
import styles from "./dropDownMenu.module.scss";
import NavLinkComponent from "../navLinkComponent/NavLinkComponent";
import CartLinkComponent from "../../cartComponents/cartLinkComponent/CartLinkComponent";
import ThemeButton from '../themeButtonComponent/ThemeButton';
import {ThemeContext} from "@/context/themeContext";
import {useDropdownProvider} from '@/context/dropdownContext'

export default function DropDownMenu() {
    const {isActive, setActive} = useDropdownProvider();
    const themeContext = useContext(ThemeContext)

    const handleActive = () => {
        setActive(!isActive);
    };

    return (
        <div className={styles.dropDownWrapper}>
            <div
                className={`${styles.dropDownMenu} ${isActive ? styles.dropDownMenuActive : ''} ${themeContext.themeData ? styles.bgWhite : styles.bgBlack}`}
            >
                <NavLinkComponent setAction={setActive} navTo={"/"} title={"STORE"}/>
                <NavLinkComponent setAction={setActive} navTo={"/aboutUs"} title={"ABOUT US"}/>
                <NavLinkComponent setAction={setActive} navTo={"/contactUs"} title={"CONTACT US"}/>
                <NavLinkComponent setAction={setActive} navTo={"/login"} title={"LOG IN"}/>

                <CartLinkComponent navTo={"/cart"}/>

                <ThemeButton/>
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
