"use client";

import { useEffect, useState, useContext } from "react";
import styles from "./paginator.module.scss";
import { ThemeContext } from "../../context/themeContext";
import { useProductsFilterContext } from "../../context/productsFilterContext";
import Image from "next/image";
import left from "../../images/store/left.png";
import right from "../../images/store/right.png";
import leftBlack from "../../images/store/leftBlack.png";
import rightBlack from "../../images/store/rightBlack.png";

interface Props {
  totalProductsCount: number;
}

export default function Paginator({ totalProductsCount }: Props) {
  const [pagesCounter, setPagesCounter] = useState<number>(0);
  const [allPages, setAllPages] = useState<Array<number>>([]);
  const [pagesPart, setPagesPart] = useState<number[]>([]);

  const themeContext = useContext(ThemeContext);

  const {
    currentPage,
    setCurrentPage,
    pagePartFirstIndex,
    setPagePartFirstIndex,
    filterProductsData,
    setFilterProductData,
    categories,
    productsPerPage,
  } = useProductsFilterContext();

  useEffect(() => {
    if (
      currentPage === pagesPartLastElement &&
      currentPage <= allPages.length - 1
    ) {
      setPagePartFirstIndex(pagePartFirstIndex + 1);
    } else if (currentPage === pagesPartFirstElement && currentPage > 1) {
      setPagePartFirstIndex(pagePartFirstIndex - 1);
    }
  }, [currentPage]);

  useEffect(() => {
    setPagesCounter(Math.ceil(totalProductsCount / productsPerPage));
  }, [productsPerPage, totalProductsCount]);

  useEffect(() => {
    if (pagesCounter && categories == "all") {
      setAllPages(pages);
    } else {
      const categoriesPages = [];
      let categoriesPagesCount;
      for (let i = 1; i <= filterProductsData.length; i++) {
        categoriesPagesCount = Math.round(i / productsPerPage);
      }
      if (categoriesPagesCount) {
        for (let i = 1; i <= categoriesPagesCount; i++) {
          categoriesPages.push(i);
        }
      }
      setAllPages(categoriesPages);
    }
  }, [pagesCounter, categories, filterProductsData, setFilterProductData]);

  useEffect(() => {
    setPagesPart(allPagesSlice);
  }, [allPages, pagePartFirstIndex]);

  const pages: Array<number> = [];
  for (let i = 1; i < pagesCounter + 1; i++) {
    pages.push(i);
  }

  const allPagesSlice = allPages.slice(
    pagePartFirstIndex,
    pagePartFirstIndex + 3
  );

  const pagesPartFirstElement: number = Math.min(...pagesPart);
  const pagesPartLastElement: number = Math.max(...pagesPart);

  const handleNextPages = () => {
    if (currentPage <= pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPages = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleGoToFirstPage = () => {
    setCurrentPage(1);
    const partPages: number[] = allPages.slice(0, 3);
    setPagesPart(partPages);
    setPagePartFirstIndex(0);
  };

  const handleGoToLastPage = () => {
    setCurrentPage(allPages.length);
    const partPages: number[] = allPages.slice(
      allPages.length - 3,
      allPages.length
    );
    setPagesPart(partPages);
    setPagePartFirstIndex(allPages.length - 3);
  };

  const pagesPartMap = pagesPart.map((el: any, index: number) => {
    const handleClick = () => {
      setCurrentPage(el);
    };
    return (
      <div
        onClick={handleClick}
        className={
          currentPage == el
            ? !themeContext.themeData
              ? `${styles.pageNumWrapper} ${styles.pageNumBorderWhite}`
              : `${styles.pageNumWrapper} ${styles.pageNumBorderBlack}`
            : `${styles.pageNumWrapper} ${styles.pageNumWrapperDarkTheme}`
        }
        key={index}
      >
        {el}
      </div>
    );
  });

  return (
    <div
      style={pagesCounter == 1 ? { display: "none" } : { display: "flex" }}
      className={styles.paginatorWrapper}
    >
      <div
        onClick={handleGoToFirstPage}
        style={currentPage === 1 ? { display: "none" } : {}}
        className={
          allPages.length > 3
            ? `${styles.firstLastPage} ${styles.goToFirstPage}`
            : styles.displayNone
        }
      >
        <p>{allPages[0]}</p>
        <p className={styles.dots}>. . .</p>
      </div>

      <button
        onClick={handlePrevPages}
        disabled={currentPage < 1}
        className={allPages.length > 3 ? styles.btnStyle : styles.displayNone}
      >
        <div className={styles.arrowBtnWrapper}>
          <Image
            className={styles.arrowBtn}
            src={themeContext.themeData ? leftBlack : left}
            alt="prev"
            height={30}
            width={20}
          />
        </div>
      </button>
      <div style={{ display: "flex" }}> {pagesPartMap} </div>
      <button
        onClick={handleNextPages}
        className={allPages.length > 3 ? styles.btnStyle : styles.displayNone}
      >
        <div className={styles.arrowBtnWrapper}>
          <Image
            className={styles.arrowBtn}
            src={themeContext.themeData ? rightBlack : right}
            alt="next"
            height={30}
            width={20}
          />
        </div>
      </button>

      <div
        onClick={handleGoToLastPage}
        style={currentPage === allPages.length ? { display: "none" } : {}}
        className={
          allPages.length > 3
            ? `${styles.firstLastPage} ${styles.goToLastPage}`
            : styles.displayNone
        }
      >
        <p className={styles.dots}>. . .</p>
        <p>{allPages.length}</p>
      </div>
    </div>
  );
}
