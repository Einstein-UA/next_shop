"use client";

import {
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  createContext,
  useEffect,
} from "react";

interface CartItem {
    id: string,
    title: string,
    price: number,
    images: string[],
  }

interface ContextProps {
  cartItems: CartItem[],
  setCartItems: Dispatch<SetStateAction<CartItem[]>>,
  isItemAdded:boolean,
  setItemAdded: Dispatch<SetStateAction<boolean>>,
}
const CartContext = createContext<ContextProps>({
  cartItems: [],
  setCartItems: () => {},
  isItemAdded: false,
  setItemAdded: () => {},
});

export const CartContextProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isItemAdded, setItemAdded] = useState(false)

  useEffect(() => {
    const data = window.localStorage.getItem("CART_CONTEXT");
    if (data) {setCartItems(JSON.parse(data))}
  }, []);

  useEffect(() => {
    window.localStorage.setItem("CART_CONTEXT", JSON.stringify(cartItems));
  }, [cartItems]);
  
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, isItemAdded, setItemAdded }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

