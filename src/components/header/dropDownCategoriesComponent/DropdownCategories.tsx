'use client'
import styles from './dropDownCategories.module.scss'

export default function DropdownCategories() {
  return (
      <select
        className={`${styles.dropDownCommon} ${styles.categories}`}
        name="categories"
        id="categories"
      >
        <option value="all">all categories</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
      </select>
  );
}
