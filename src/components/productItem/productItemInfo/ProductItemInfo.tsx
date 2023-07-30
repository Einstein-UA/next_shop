"use client";

import { useEffect, useState } from "react";
import styles from "./productItemInfo.module.scss";
import Image from "next/image";
import { fetcher } from "../../../swrFetcher/swrFetcher";
import useSWR from "swr";
import btnLeft from "../../../images/products/left.png";
import btnRight from "../../../images/products/right.png";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export default function ProductItemInfo({ id }: Props) {
  const [imagesUrl, setImagesUrl] = useState<Array<string>>([]);
  const [imageNumber, setImageNumber] = useState<number>(0);
  const router = useRouter();

  const { data } = useSWR(`https://dummyjson.com/products/${id}`, fetcher);

  useEffect(() => {
    if (data) {
      setImagesUrl(data.images);
    }
  }, [data]);

  const sliceImagesUrl = imagesUrl.filter(
    (el: string, index: number) => index === imageNumber
  );

  const handleNextClick = () => {
    setImageNumber((prev) => prev + 1);
  };
  const handlePrevClick = () => {
    setImageNumber((prev) => prev - 1);
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.productItemInfoWrapper}>
      <button className={styles.btnBackStyle} onClick={handleBackClick}>BACK</button>
      <div className={styles.productItemInfo}>
        {imageNumber === 0 ? (
          ""
        ) : (
          <button
            onClick={handlePrevClick}
            className={`${styles.btnStyles} ${styles.prevBtnPosition}`}
          >
            <Image src={btnLeft} width={20} height={30} alt="btnLeft" />
          </button>
        )}
        <div className={styles.imagesWrapper}>
          {!sliceImagesUrl[0] ? (
            ""
          ) : (
            <Image
              style={{ borderRadius: "10px" }}
              src={sliceImagesUrl[0]}
              width={300}
              height={300}
              alt={data.title}
            />
          )}
        </div>
        {imageNumber === imagesUrl.length - 1 ? (
          ""
        ) : (
          <button
            onClick={handleNextClick}
            className={`${styles.btnStyles} ${styles.nextBtnPosition}`}
          >
            <Image src={btnRight} width={20} height={30} alt="btnRight" />
          </button>
        )}
      </div>
    </div>
  );
}
