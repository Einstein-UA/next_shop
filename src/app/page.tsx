import styles from "./store.module.scss";
import ProductItem from "../components/productItem/ProductItem";
import FilterComponent from "@/components/filterComponent/FilterComponent";

async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=100");

  if (!res) {
    throw new Error("Field to fetch data");
  }

  return res.json();
}

export default async function StoreProducts() {
  const data = await getData();
  return (
    <div className={styles.storeWrapper}>
      <FilterComponent data={data.products} />
      <ProductItem data={data.products} />
    </div>
  );
}

