"use client";

import styles from "./bannerComponent.module.scss";
import Image from "next/image";
import rocket from "../../images/store/rocket.webp";
import sale from "../../images/store/sale.gif";
import { useLogoContext } from "@/context/logoContext";

interface Props {
  position?: string;
}

export default function BannerComponent({ position }: Props) {

  const { isBannerActive } = useLogoContext();

  return (
    <div
      className={
        position === "top"
          ? !isBannerActive
            ? styles.rocketSaleWrapperTop
            : `${styles.rocketSaleWrapperTop} ${styles.rocketSaleWrapperTopActive}`
          : !isBannerActive
          ? styles.rocketSaleWrapperBottom
          : `${styles.rocketSaleWrapperBottom} ${styles.rocketSaleWrapperBottomActive}`
      }
    >
      <Image
        className={styles.sale}
        src={sale}
        alt="sale"
        width={0}
        height={0}
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
