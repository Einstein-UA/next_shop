"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

import { ReactNode } from "react";
import Link from "next/link";
interface Props {
  navTo: string;
  content1: ReactNode;
  content2: ReactNode;
}
export default function CartLink({ navTo, content1, content2 }: Props) {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <Link href={navTo}>{themeContext.themeData ? content2 : content1}</Link>
    </>
  );
}
