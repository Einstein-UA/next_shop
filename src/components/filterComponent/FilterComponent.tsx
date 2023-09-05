"use client";

import styles from "./filterComponent.module.scss";
import DropdownItemsPerPage from "./dropDownItemsPerPageComponent/DropdownItemsPerPage";
import DropdownCategories from "./dropDownCategoriesComponent/DropdownCategories";
import SearchComponent from "./searchComponent/SearchComponent";
import { ThemeContext } from "@/context/themeContext";
import { useContext } from "react";
import Paginator from "../paginator/Paginator";

interface Props {
  data: [object];
}

export default function FilterComponent({ data }: Props) {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={
        themeContext.themeData
          ? styles.titleWrapperWhiteTheme
          : `${styles.titleWrapperWhiteTheme} ${styles.titleWrapperDarkTheme}`
      }
    >

      <h1>Store</h1>
      <div>
        <div className={styles.filtersWrapper}>
          <DropdownItemsPerPage totoalProductsCount={data.length} />
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
