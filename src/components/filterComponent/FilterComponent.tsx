"use client";

import styles from "./filterComponent.module.scss";
import DropdownItemsPerPage from "./dropDownItemsPerPageComponent/DropdownItemsPerPage";
import DropdownCategories from "./dropDownCategoriesComponent/DropdownCategories";
import SearchComponent from "./searchComponent/SearchComponent";
import { ThemeContext } from "@/context/themeContext";
import { useProductsFilterContext } from "@/context/productsFilterContext";
import { useContext } from "react";
import Paginator from "../paginator/Paginator";

interface Props {
  data: [object];
}

export default function FilterComponent({ data }: Props) {
  const themeContext = useContext(ThemeContext);
  const {scrollingFilterVisibility} = useProductsFilterContext()

  return (
    <div
      className={
        themeContext.themeData
          ? scrollingFilterVisibility ? `${styles.titleWrapperWhiteTheme} ${styles.filtersWrapperScrolling}` : styles.titleWrapperWhiteTheme
          : scrollingFilterVisibility ? `${styles.titleWrapperWhiteTheme} ${styles.titleWrapperDarkTheme} ${styles.filtersWrapperScrolling}` : `${styles.titleWrapperWhiteTheme} ${styles.titleWrapperDarkTheme}`
      }
    >

      <h1>Store</h1>
      <div>
        <div className={styles.filtersWrapper}>
          <DropdownItemsPerPage totalProductsCount={data.length} />
          <DropdownCategories />
          <SearchComponent />
        </div>
        <div>
          <Paginator
            totalProductsCount={data.length}
          />
        </div>
      </div>
    </div>
  );
}
