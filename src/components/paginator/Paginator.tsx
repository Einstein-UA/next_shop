"use client";

import { useEffect, useState, useContext } from "react";
import styles from "./paginator.module.scss";
import { ThemeContext } from "../../context/themeContext";
import { useProductsFilterContext } from "../../context/productsFilterContext";
import Image from "next/image";
import left from "../../images/products/left.png";
import right from "../../images/products/right.png";
import leftBlack from "../../images/products/leftBlack.png";
import rightBlack from "../../images/products/rightBlack.png";

interface Props {
  productsPerPage: number;
  totalProductsCount: number;
}

export default function Paginator({
  productsPerPage,
  totalProductsCount,
}: Props) {
  const themeContext = useContext(ThemeContext);
  const [pagesCounter, setPagesCounter] = useState<number>(0); // ініціалізуємо загальну кількість сторінок
  const [pagePartFirstIndex, setPagePartFirstIndex] = useState(0); //індекс першого елемента частини сторінок
  const [allPages, setAllPages] = useState<Array<number>>([]);
  const [pagesPart, setPagesPart] = useState<number[]>([]);

  const { currentPage, setCurrentPage } = useProductsFilterContext();

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

  //--------------------------------------------------------------------------------
  // встановлюємо кількість сторінок
  useEffect(() => {
    setPagesCounter(Math.ceil(totalProductsCount / productsPerPage));
  }, [productsPerPage, totalProductsCount]);
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  // встановлюємо масив з номерами всіх сторінок
  useEffect(() => {
    setAllPages(pages);
  }, [pagesCounter]);
  //--------------------------------------------------------------------------------
  // порція сторінок
  useEffect(() => {
    setPagesPart(allPagesSlice);
  }, [allPages, pagePartFirstIndex]);
  //--------------------------------------------------------------------------------
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
  };

  const handleGoToLastPage = () => {
    setCurrentPage(allPages.length);
    const partPages: number[] = allPages.slice(
      allPages.length - 3,
      allPages.length
    );
    setPagesPart(partPages);
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
      <div style={currentPage === 1 ? {display:"none"} : {}} className={`${styles.firstLastPage} ${styles.goToFirstPage}`} onClick={handleGoToFirstPage}>
        <p>{allPages[0]}</p>
        <p>. . .</p>
      </div>

      <button disabled={currentPage < 1} className={styles.btnStyle}>
        <div className={styles.arrowBtnWrapper}>
          <Image
            onClick={handlePrevPages}
            className={styles.arrowBtn}
            src={themeContext.themeData ? leftBlack : left}
            alt="prev"
            height={30}
            width={20}
          />
        </div>
      </button>
      <div style={{ display: "flex" }}> {pagesPartMap} </div>
      <button onClick={handleNextPages} className={styles.btnStyle}>
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

      <div style={currentPage === allPages.length ? {display:"none"} : {}} onClick={handleGoToLastPage} className={`${styles.firstLastPage} ${styles.goToLastPage}`}>
        <p>. . .</p>
        <p>{allPages.length}</p>
      </div>
    </div>
  );
}
