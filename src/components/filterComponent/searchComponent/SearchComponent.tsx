"use client";

import styles from "./searchComponent.module.scss";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/themeContext";
import { useProductsFilterContext } from '../../../context/productsFilterContext'

export default function SearchComponent() {
  const themeContext = useContext(ThemeContext);
  const {searchData, setSearchData, setProductsPerPage, setCategories, setFilterProductData, productsData} = useProductsFilterContext()

  useEffect(() => {

    if (searchData) {
      setCategories("all");
      setProductsPerPage(productsData.length)
      const searchRegExp = new RegExp(searchData, "i"); // "i" - ignore register
      const searchFilterData = productsData.filter((el: any) =>
        searchRegExp.test(el.title)
      );
      setFilterProductData(searchFilterData);
    } else {
      setFilterProductData(productsData);
    }

  }, [searchData,setCategories, setFilterProductData, productsData]);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value)
  }

  return (
    <form className={styles.searchWrapper}>
      <input
        className={styles.inputSearchStyles}
        type="search"
        placeholder="Search"
        onChange={onHandleChange}
        value={searchData}
      />
    </form>
  );
}
