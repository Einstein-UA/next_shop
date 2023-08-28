"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { Value } from "sass";

interface ContextProps {
  categories: string;
  setCategories: Dispatch<SetStateAction<string>>;
  productsPerPage: number;
  setProductsPerPage: Dispatch<SetStateAction<number>>;
  searchData: string;
  setSearchData: Dispatch<SetStateAction<string>>;
}

const ProductsFilterContext = createContext<ContextProps>({
  categories: "all",
  setCategories: () => {},
  productsPerPage: 5,
  setProductsPerPage: () => {},
  searchData: "",
  setSearchData: () => {},
});

export const ProductsFilterProvider = ({ children }: any) => {
  const [categories, setCategories] = useState("all");
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [searchData, setSearchData] = useState("all");
  return (
    <ProductsFilterContext.Provider
      value={{
        categories,
        setCategories,
        productsPerPage,
        setProductsPerPage,
        searchData,
        setSearchData,
      }}
    >
        {children}
    </ProductsFilterContext.Provider>
  );
};

export const useProductsFilterContext = () => useContext(ProductsFilterContext)
