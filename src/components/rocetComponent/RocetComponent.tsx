"use client";

import styles from "./rocetComponent.module.scss";
import Image from "next/image";
import rocket from "../../images/home/rocket.webp";
import sale from "../../images/home/sale.gif";
import { useLogoContext } from "../../context/logoContext";

interface Props {
  position?: string;
}

export default function RocetComponent({ position }: Props) {
  const { isBanerActive } = useLogoContext();

  return (
    <div
      className={
        position === "top"
          ? !isBanerActive
            ? styles.rocketSaleWrapperTop
            : `${styles.rocketSaleWrapperTop} ${styles.rocketSaleWrapperTopActive}`
          : !isBanerActive
          ? styles.rocketSaleWrapperBottom
          : `${styles.rocketSaleWrapperBottom} ${styles.rocketSaleWrapperBottomActive}`
      }
    >
      <Image
        className={styles.sale}
        src={sale}
        alt="sale"
        width={150}
        height={100}
      />
      <Image
        className={styles.rocket}
        src={rocket}
        alt="rocket"
        width={200}
        height={400}
      />
    </div>
  );
}
