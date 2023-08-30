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
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const ProductsFilterContext = createContext<ContextProps>({
  categories: "all",
  setCategories: () => {},
  productsPerPage: 10,
  setProductsPerPage: () => {},
  searchData: "",
  setSearchData: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
});

export const ProductsFilterProvider = ({ children }: any) => {
  const [categories, setCategories] = useState("all");
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [searchData, setSearchData] = useState("all");
  const [currentPage, setCurrentPage] =useState(1)
  return (
    <ProductsFilterContext.Provider
      value={{
        categories,
        setCategories,
        productsPerPage,
        setProductsPerPage,
        searchData,
        setSearchData,
        currentPage,
        setCurrentPage,
      }}
    >
        {children}
    </ProductsFilterContext.Provider>
  );
};

export const useProductsFilterContext = () => useContext(ProductsFilterContext)
