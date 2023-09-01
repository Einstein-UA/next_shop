"use client";

import styles from "./dropDownCategories.module.scss";
import { useProductsFilterContext } from '../../../context/productsFilterContext'

export default function DropdownCategories() {

  const {categories, setCategories, setCurrentPage, setPagePartFirstIndex} = useProductsFilterContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategories(e.target.value)
    setCurrentPage(1)
    setPagePartFirstIndex(0)
  };
  return (
    <select
      onChange={handleChange}
      className={`${styles.dropDownCommon} ${styles.categories}`}
      name="categories"
      id="categories"
      value={categories}
    >
      <option value="all">All categories</option>
      <option value="smartphones">Smartphones</option>
      <option value="laptops">Laptops</option>
      <option value="fragrances">Perfumes</option>
      <option value="skincare">Skin care</option>
      <option value="groceries">Groceries</option>
      <option value="home-decoration">Home decoration</option>
      <option value="furniture">Furniture</option>
      <option value="tops">tops</option>
      <option value="womens-dresses">Womens dresses</option>
      <option value="womens-shoes">Womens shoes</option>
      <option value="mens-shirts">Mens shirts</option>
      <option value="mens-shoes">Mens shoes</option>
      <option value="mens-watches">Mens watches</option>
      <option value="womens-watches">Womens watches</option>
      <option value="womens-bags">Womens bags</option>
      <option value="womens-jewellery">Womens jewellery</option>
      <option value="sunglasses">Sunglasses</option>
      <option value="automotive">For cars</option>
      <option value="motorcycle">Motorcycle</option>
      <option value="lighting">Lighting</option>
    </select>
  );
}
