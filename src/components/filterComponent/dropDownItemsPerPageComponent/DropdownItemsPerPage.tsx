"use client";
import styles from "./dropDownItemsPerPage.module.scss";

export default function DropdownItemsPerPage() {
  const onHandleChange = () => {};

  return (
    <div className={styles.productsPerPageWrapper}>
      <p>Products per page</p>
      <select
        title="elements per page"
        className={styles.dropDownCommon}
        name="categories"
        id="categories"
        defaultValue={3}
        onChange={onHandleChange}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
  );
}
