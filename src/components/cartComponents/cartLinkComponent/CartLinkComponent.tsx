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
  navTo: string;
}

export default function CartLink({ navTo }: Props) {

  const themeContext = useContext(ThemeContext);
  const {cartItems} = useCartContext();
  return (
    <>
      <Link className={styles.cartLinkWrapper}  href={navTo}>
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
