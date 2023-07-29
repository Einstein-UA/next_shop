import { AnyNaptrRecord } from "dns";
import styles from "./storeProductItem.module.scss";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=100");

  if (!res) {
    throw new Error("Field to fetch data");
  }

  return res.json();
}

interface Products {
  id: number;
  title: string;
  price: string;
  rating: string;
  images: Array<string>;
}

export default async function StoreProductItem() {
  const data = await getData();

  const dataMap = data.products.map((el: Products) => {
    const imagesUrl = el.images.map((img: any) => img);
    return (
      <div key={el.id}>
        <div>title: {el.title}</div>
        <div>price: {el.price}</div>
        <div>rating: {el.rating}</div>
        <div>
          <Image src={imagesUrl[0]} width={100} height={100} alt="img" />
        </div>
      </div>
    );
  });

  return <>{ dataMap }</>;
}
