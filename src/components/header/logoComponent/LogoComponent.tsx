"use client";

import styles from "./logoComponent.module.scss";
import Image from "next/image";
import logo1 from "../../../images/header/logo1.png";
import logo2 from "../../../images/header/logo2.png";
import { useLogoContext } from "@/context/logoContext";
import { useEffect } from "react";
import Link from "next/link";
import { useToggle } from "@/hooks/useToggle";

export default function LogoComponent() {
  const { isBannerActive, setBannerActive } = useLogoContext();
  const [firstRender, setFirstRender] = useToggle(false);
  const [isHover, setHover] = useToggle(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFirstRender(true);
    }, 1700);

    return () => clearTimeout(timeout);
  }, []);

  const handleClick = () => {
    setBannerActive(true);
    const timeout = setTimeout(() => {
      setBannerActive(false);
    }, 3000);

    return () => clearTimeout(timeout);
  };

  const onMouseEvent = () => {
    if (firstRender) {
      setHover(true);
      const timeout = setTimeout(() => {
        setHover(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  };

  return (
    <Link href={"/"}>
      <button
        onMouseEnter={onMouseEvent}
        onMouseLeave={onMouseEvent}
        className={styles.logoBtn}
        disabled={isBannerActive}
      >
        <div onClick={handleClick} className={styles.logoWrapper}>
          <Image
            className={
                firstRender
                  ? !isHover
                    ? styles.logo1
                    : `${styles.logo1} ${styles.logo1Hover}`
                  : `${styles.logo1} ${styles.logo1FirstRender}`
              }
            src={logo1}
            width={50}
            height={60}
            alt="logo1"
          />
          <Image
            className={
                firstRender
                  ? !isHover
                    ? styles.logo2
                    : `${styles.logo2} ${styles.logo2Hover}`
                  : `${styles.logo2} ${styles.logo2FirstRender}`
              }
            src={logo2}
            width={100}
            height={30}
            alt="logo2"
          />
        </div>
      </button>
    </Link>
  );
};
