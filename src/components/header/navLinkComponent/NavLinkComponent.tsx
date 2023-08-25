"use client";

import styles from "./navLinkComponent.module.scss";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  navTo: string;
  title: string | ReactNode;
  setAction?: any;
}

export default function NavLink({ navTo, title, setAction }: Props) {
  const themeContext = useContext(ThemeContext);

  const handleClick = () => {
    if (setAction) {
      setAction(false);
    }
  };

  return (
    <div className={styles.nawLinkWrapper}>
      <Link
        onClick={handleClick}
        className={
          themeContext.themeData
            ? styles.navLinkWhiteTheme
            : styles.navLinkDarkTheme
        }
        href={navTo}
      >
        {title}
      </Link>
    </div>
  );
}
