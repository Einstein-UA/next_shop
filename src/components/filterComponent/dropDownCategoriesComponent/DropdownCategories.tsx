"use client";
import styles from "./dropDownCategories.module.scss";
import { useProductsFilterContext } from '../../../context/productsFilterContext'
import {useToggle} from '../../../hooks/useToggle'



export default function DropdownCategories() {
  const {categories, setCategories} = useProductsFilterContext();
  const [isActive, setActive] = useToggle(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategories(e.target.value)
    setActive(false)
  };
  return (
    <select
      onChange={handleChange}
      className={`${styles.dropDownCommon} ${styles.categories}`}
      name="categories"
      id="categories"
      value={categories}
    >
      <option value="all">all categories</option>
      <option value="smartphones">smartphones</option>
      <option value="laptops">laptops</option>
      <option value="fragrances">fragrances</option>
      <option value="skincare">skincare</option>
      <option value="groceries">groceries</option>
      <option value="home-decoration">home-decoration</option>
      <option value="furniture">furniture</option>
      <option value="tops">tops</option>
      <option value="womens-dresses">womens-dresses</option>
      <option value="womens-shoes">womens-shoes</option>
      <option value="mens-shirts">mens-shirts</option>
      <option value="mens-shoes">mens-shoes</option>
      <option value="mens-watches">mens-watches</option>
      <option value="womens-watches">womens-watches</option>
      <option value="womens-bags">womens-bags</option>
      <option value="womens-jewellery">womens-jewellery</option>
      <option value="sunglasses">sunglasses</option>
      <option value="automotive">automotive</option>
      <option value="motorcycle">motorcycle</option>
      <option value="lighting">lighting</option>
    </select>
  );
}
