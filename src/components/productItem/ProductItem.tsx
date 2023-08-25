import styles from "./productItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

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

const Comfortaa_Light = localFont({
  src: "../../fonts/Comfortaa-Light.ttf",
  display: "swap",
});

export default async function ProductItem() {
  
  const data = await getData();

  const productItemWrapperStyles: object = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const dataMap = data.products.map((el: Products) => {
    const imagesUrl = el.images.map((img: any) => img);
    return (
      <div className={styles.productItem} key={el.id}>
        <div className={styles.imageWrapper}>
          <Image src={imagesUrl[0]} width={100} height={100} alt="img" />
        </div>
        <div>
          <div>
            <p>{el.title}</p>
          </div>
          <div>
            <p>
              {el.price} $
            </p>
          </div>
        </div>
        <Link href={`/products/${el.id}`}>
          <button className={styles.btnStyle}><b>DETAILS</b></button>
        </Link>
      </div>
    );
  });
  return <div style={productItemWrapperStyles} className={Comfortaa_Light.className}>{dataMap}</div>;
}
