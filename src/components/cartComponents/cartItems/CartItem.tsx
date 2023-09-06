"use client";

import styles from "./cartItem.module.scss";
import {useCartContext} from "@/context/cartContext";
import Image from "next/image";
import { ThemeContext } from '@/context/themeContext';
import {useContext} from "react";
import Link from "next/link";

export default function CartItem() {
    const {cartItems, setCartItems} = useCartContext();
    const themeContext = useContext(ThemeContext)

    let totalPrice = cartItems.reduce(function (sum, item) {
        return sum + item.price;
    }, 0);

    const handleClearCart = () => {
        window.localStorage.clear();
        setCartItems([])
    }
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.totalWrapper}>
                <h3>TOTAL : {totalPrice}$</h3>
                <button onClick={handleClearCart} className={styles.clearCartBtn}>
                    CLEAR CART
                </button>
            </div>
            <div className={styles.cartItemWrapper}>
                {cartItems.map((item) => {
                    const handleDeleteItem = () => {
                        setCartItems(cartItems.filter(el => el.id !== item.id))
                    }
                    return (
                        <div className={styles.cartItem} key={item.id}>
                            <Link key={item.id} style={themeContext.themeData ? {
                                textDecoration: "none",
                                color: 'black'
                            } : {textDecoration: "none", color: 'white'}} href={`/${item.id}`}>
                                <Image
                                    src={item.images[0]}
                                    width={100}
                                    height={100}
                                    alt="itemImg"
                                />
                                <div>{item.title}</div>
                                <div>{item.price}$</div>
                            </Link>
                            <button onClick={handleDeleteItem} className={styles.deleteItemBtn}>DELETE</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
