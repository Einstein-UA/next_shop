"use client";

import styles from "./productItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import { useProductsFilterContext } from "../../context/productsFilterContext";

interface Props {
  data: Array<object>;
}

const Comfortaa_Light = localFont({
  src: "../../fonts/Comfortaa-Light.ttf",
  display: "swap",
});

export default function ProductItem({ data }: Props) {
  const [productsData, setProductsData] = useState<Array<object>>([]);
  const [filterProductsData, setFilterProductDAta] = useState<Array<object>>([]);
  const { categories } = useProductsFilterContext();

  useEffect(() => {
    if (data) {
      setProductsData(data);
    }
  }, [data]);

  useEffect(() => {
    if (productsData && categories !== "all") {
      const filterData = productsData.filter((el: any) => el.category === categories);
      setFilterProductDAta(filterData);
    } else {
      setFilterProductDAta(data);
    }
  }, [categories]);

  const dataMap = filterProductsData.map((el: any) => {
    const imagesUrl = el.images.map((img: any) => img);
    return (
      <div className={styles.productItem} key={el.id}>
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
