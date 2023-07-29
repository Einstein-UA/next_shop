"use client";
import { useEffect, useState } from "react";
import styles from "./productItemImage.module.scss";
import Image from "next/image";
import { fetcher } from "../../../swrFetcher/swrFetcher";
import useSWR from "swr";

export default function ProductItemImage() {

  const { data, error, isLoading } = useSWR("https://dummyjson.com/products?limit=100", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const test = data.products.map((el:any)=>el.images)

  console.log(test);
  return (
    <div>
      <h1>test</h1>
    </div>
  );
}
