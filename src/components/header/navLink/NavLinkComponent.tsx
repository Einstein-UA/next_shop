"use client";

import styles from "../header.module.scss";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  navTo: string;
  title: string | ReactNode;
}

export default function NavLink({ navTo, title }: Props) {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={styles.nawLinkWrapper}>
      <Link
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
