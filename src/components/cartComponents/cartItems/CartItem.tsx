"use client";

import styles from "./cartItem.module.scss";
import { useCartContext } from "../../../context/cartContext";
import Image from "next/image";

export default function CartItem() {
  const { cartItems , setCartItems} = useCartContext();

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
              const hendlDeleteItem = () => {
                setCartItems(cartItems.filter(el => el.id !== item.id))
              }
          return (
            <div className={styles.cartItem} key={item.id}>
              <Image
                src={item.images[0]}
                width={100}
                height={100}
                alt="itemImg"
              />
              <div>{item.title}</div>
              <div>{item.price}$</div>
              <button onClick={hendlDeleteItem} className={styles.deleteItemBtn}>DELETE</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
