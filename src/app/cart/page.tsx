import CartItem from '@/components/cartComponents/cartItems/CartItem'
import styles from './cart.module.scss'

export default function Cart() {
    return(
        <div className={styles.cartWrapper}>
            <h1>Cart</h1>
            <CartItem/>
        </div>
    )
}