import styles from "./products.module.scss";
import ProductItem from "../../components/productItem/ProductItem";

export default async function StoreProducts() {
  return (
    <div className={styles.storeWrapper}>
      <div className={styles.titleWrapper}>
        <h1>Store</h1>
      </div>
      <ProductItem />
    </div>
  );
}
