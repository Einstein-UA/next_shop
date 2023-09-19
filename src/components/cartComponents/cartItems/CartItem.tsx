"use client";

import styles from "./cartItem.module.scss";
import {useCartContext} from "@/context/cartContext";
import Image from "next/image";
import {ThemeContext} from '@/context/themeContext';
import {useContext, useEffect, useState} from "react";
import Link from "next/link";

export default function CartItem() {
    const {cartItems, setCartItems} = useCartContext();
    const themeContext = useContext(ThemeContext)
    const [totalPrice, setTotalPrice] = useState(0)
    const [itemCounts, setItemCounts] = useState<any>({});


    useEffect(() => {
        if (cartItems) {
            setTotalPrice(cartItems.reduce((sum, item) => sum + (item.price * `${itemCounts[item.id] ? itemCounts[item.id] : 1}`), 0))
        }

    }, [cartItems])


    const handleClearCart = () => {
        window.localStorage.clear();
        setCartItems([])
    }

    const handleItemPlus = (item) => {
        const newCounts = {...itemCounts};
        if (!newCounts[item.id]) {
            newCounts[item.id] = 1;
        }
        newCounts[item.id]++;
        setItemCounts(newCounts);

        setTotalPrice(totalPrice + item.price);
    };
    const handleItemMinus = (item) => {
        const newCounts = {...itemCounts};
        if (newCounts[item.id] > 1) {
            newCounts[item.id]--;
            setItemCounts(newCounts);
            setTotalPrice(totalPrice - item.price);
        }
    };

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.totalWrapper}>
                <h3>TOTAL : {totalPrice}$</h3>
                <button onClick={handleClearCart} className={styles.clearCartBtn}>
                    CLEAR CART
                </button>
            </div>
            <div className={styles.cartItemWrapper}>
                {cartItems.map((item, index) => {
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
                                    priority="true"
                                    src={item.images[0]}
                                    width={100}
                                    height={100}
                                    alt="itemImg"
                                />
                                <div>{item.title}</div>
                                <div>{item.price}$</div>
                            </Link>
                            <div>
                                <div className={styles.itemCounterWrapper}>
                                    <button className={styles.counterBtn} onClick={() => handleItemMinus(item)}>-
                                    </button>
                                    <div>{itemCounts[item.id] || 1}</div>
                                    <button className={styles.counterBtn} onClick={() => handleItemPlus(item)}>+
                                    </button>
                                </div>
                                <button onClick={handleDeleteItem} className={styles.deleteItemBtn}>DELETE</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
