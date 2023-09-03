"use client";

import styles from './cartLinkKomponent.module.scss'
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import cartWhiteTheme from "../../../images/header/cart.png";
import cartDarkTheme from "../../../images/header/cartDark.png";
import Image from "next/image";
import Link from "next/link";
import { useCartContext } from '../../../context/cartContext'

interface Props {
  navTo: string,
  setAction:React.Dispatch<React.SetStateAction<boolean>>,
}

export default function CartLink({ navTo, setAction }: Props) {

  const themeContext = useContext(ThemeContext);
  const {cartItems} = useCartContext();
  const handleClick = () => {
    setAction(false)
  }
  return (
    <>
      <Link onClick={handleClick} className={styles.cartLinkWrapper}  href={navTo}>
        {cartItems.length > 0 ? <div className={styles.cartItemsCounter}><p>{cartItems.length}</p></div> : ""}
        {themeContext.themeData ? (
          <Image src={cartDarkTheme} width={50} height={40} alt="Cart" />
        ) : (
          <Image src={cartWhiteTheme} width={50} height={40} alt="Cart" />
        )}
      </Link>
    </>
  );
}
