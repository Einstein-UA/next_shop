import styles from "./products.module.scss";
import ProductItem from "../../components/productItem/ProductItem";
import SearchComponent from "../../components/filterComponent/searchComponent/SearchComponent";
import DropdownItemsPerPage from "../../components/filterComponent/dropDownItemsPerPageComponent/DropdownItemsPerPage";
import DropdownCategories from "../../components/filterComponent/dropDownCategoriesComponent/DropdownCategories";
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
      <FilterComponent/>
      <ProductItem data={data.products} />
    </div>
  );
}
