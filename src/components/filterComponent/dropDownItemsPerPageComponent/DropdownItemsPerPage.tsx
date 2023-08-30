"use client";
import styles from "./dropDownItemsPerPage.module.scss";
import { useProductsFilterContext } from '../../../context/productsFilterContext'

interface Props {
  totoalProductsCount: number,
}

export default function DropdownItemsPerPage({ totoalProductsCount }:Props) {
  const {productsPerPage, setProductsPerPage, setCurrentPage } = useProductsFilterContext();
  const onHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductsPerPage(Number(e.target.value))
    setCurrentPage(1)
  };


  return (
    <div className={styles.productsPerPageWrapper}>
      <p>Products per page</p>
      <select
        title="elements per page"
        className={styles.dropDownCommon}
        name="categories"
        id="categories"
        defaultValue={productsPerPage}
        onChange={onHandleChange}
      >
        <option value={3}>3</option>
        <option value={10}>10</option>
        <option value={totoalProductsCount}>All</option>
      </select>
    </div>
  );
}
