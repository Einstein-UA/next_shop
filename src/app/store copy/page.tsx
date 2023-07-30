import styles from "./store.module.scss";
import StoreProductItem from "../../components/productItem/ProductItem";

export default async function Store() {
  return (
    <div className={styles.storeWrapper}>
      <div className={styles.titleWrapper}>
        <h1>Store</h1>
      </div>
      <StoreProductItem />
    </div>
  );
}
