"use client";

import styles from "./productItem.module.scss";
import Image from "next/image";
import addedImg from "../../images/products/added.webp";
import Link from "next/link";
import localFont from "next/font/local";
import { useEffect } from "react";
import { useProductsFilterContext } from "../../context/productsFilterContext";
import { useCartContext } from "../../context/cartContext";

interface Props {
  data: Array<object>;
}

const Comfortaa_Light = localFont({
  src: "../../fonts/Comfortaa-Light.ttf",
  display: "swap",
});

export default function ProductItem({ data }: Props) {
  const { setProductsData, productsData } = useProductsFilterContext();
  const { cartItems } = useCartContext();

  const {
    categories,
    currentPage,
    productsPerPage,
    filterProductsData,
    setFilterProductData,
  } = useProductsFilterContext();

  useEffect(() => {
    if (data) {
      setProductsData(data);
    }
  }, [data]);

  useEffect(() => {
    if (productsData && categories !== "all") {
      const filterData = productsData.filter(
        (el: any) => el.category === categories
      );
      setFilterProductData(filterData);
    } else {
      setFilterProductData(data);
    }
  }, [categories]);

  const lastPageIndex = currentPage * productsPerPage;
  const firstPageIndex = lastPageIndex - productsPerPage;

  const prodPerPage = filterProductsData.slice(firstPageIndex, lastPageIndex);

  const addedId = cartItems.length > 0 ? cartItems.map((el) => el.id) : [];

  const dataMap = prodPerPage.map((el: any) => {
    const imagesUrl = el.images.map((img: any) => img);
    return (
      <div className={styles.productItem} key={el.id}>
        {addedId.includes(el.id) ? (
          <Image className={styles.addedImg} src={addedImg} alt="addedImg" />
        ) : (
          ""
        )}
        <div className={styles.imageWrapper}>
          <Image src={imagesUrl[0]} width={100} height={100} alt="img" />
        </div>
        <div>
          <div>
            <p>{el.title}</p>
          </div>
          <div>
            <p>{el.price} $</p>
          </div>
        </div>
        <Link href={`/products/${el.id}`}>
          <button className={styles.btnStyle}>
            <b>DETAILS</b>
          </button>
        </Link>
      </div>
    );
  });

  return (
    <div
      className={`${Comfortaa_Light.className} ${styles.productItemWrapperStyles}`}
    >
      {dataMap}
    </div>
  );
}
