import styles from "./store.module.scss";
import StoreProductItem from "../../components/storeProductItem/StoreProductItem";
// import Image from "next/image";

// async function getData() {
//   const res = await fetch("https://dummyjson.com/products?limit=100");

//   if (!res) {
//     throw new Error("Field to fetch data");
//   }

//   return res.json();
// }

// interface Products {
//   id: number;
//   title: string;
//   price: string;
//   rating: string;
//   images: Array<string>;
// }

// interface Images {
//   imgUrl: any;
// }

export default async function Store() {
  // const data = await getData();

  // const dataMap = data.products.map((el: Products) => {
  //   const imagesUrl = el.images.map((img: any) => img)
 
  //   return (
  //     <div key={el.id}>
  //       <div>title: {el.title}</div>
  //       <div>price: {el.price}</div>
  //       <div>rating: {el.rating}</div>
  //       <div>
  //       <Image src={imagesUrl[0]} width={100} height={100} alt="img"/>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <div className={styles.storeWrapper}>
      <h1>Store</h1>
      <StoreProductItem />
    </div>
  );
}
