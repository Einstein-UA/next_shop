"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  categories: string;
  setCategories: Dispatch<SetStateAction<string>>;
  productsPerPage: number;
  setProductsPerPage: Dispatch<SetStateAction<number>>;
  searchData: string;
  setSearchData: Dispatch<SetStateAction<string>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  pagePartFirstIndex: number;
  setPagePartFirstIndex: Dispatch<SetStateAction<number>>;
  filterProductsData: object[],
  setFilterProductDAta: Dispatch<SetStateAction<object[]>>,
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
  pagePartFirstIndex: 0,
  setPagePartFirstIndex: () => {},
  filterProductsData: [],
  setFilterProductDAta: () => {},
});

export const ProductsFilterProvider = ({ children }: any) => {
  const [categories, setCategories] = useState("all");
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [searchData, setSearchData] = useState("all");
  const [currentPage, setCurrentPage] =useState(1)
  const [pagePartFirstIndex, setPagePartFirstIndex] = useState(0);
  const [filterProductsData, setFilterProductDAta] = useState<object[]>([]);
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
        pagePartFirstIndex,
        setPagePartFirstIndex,
        filterProductsData,
        setFilterProductDAta,
      }}
    >
        {children}
    </ProductsFilterContext.Provider>
  );
};

export const useProductsFilterContext = () => useContext(ProductsFilterContext)
