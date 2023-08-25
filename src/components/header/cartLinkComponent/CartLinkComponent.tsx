"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import cartWhiteTheme from "../../../images/header/cart.png";
import cartDarkTheme from "../../../images/header/cartDark.png";
import Image from "next/image";
import Link from "next/link";
interface Props {
  navTo: string;
}
export default function CartLink({ navTo }: Props) {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <Link href={navTo}>
        {themeContext.themeData ? (
          <Image src={cartDarkTheme} width={50} height={40} alt="Cart" />
        ) : (
          <Image src={cartWhiteTheme} width={50} height={40} alt="Cart" />
        )}
      </Link>
    </>
  );
}
