import styles from "./productInfo.module.scss";
import ProductItemInfo from "../../../components/productItem/productItemInfo/ProductItemInfo";
import localFont from "next/font/local";

interface Props {
  params: {
    id: string;
  };
}

const Comfortaa_Light = localFont({
  src: "../../../fonts/Comfortaa-Light.ttf",
  display: "swap",
});

export default async function ProductInfo({ params: { id } }: Props) {



  const product = await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => res.json()
  );



  return (
    <div
      className={`${styles.ProductInfoWrapper} ${Comfortaa_Light.className}`}
    >
      <div>
        <h1>Product details</h1>

      </div>

      <ProductItemInfo id={id} />
      <p>{product.title}</p>
      <div className={styles.details}>
        <p>
          <b>brand:</b> {product.brand}
        </p>
        <p>
          <b>price:</b> {product.price} $
        </p>
        <p>
          {" "}
          <b>rating:</b> {product.rating}
        </p>
        <p>
          {" "}
          <b>stock:</b> {product.stock}
        </p>
        <div>
          <p style={{ whiteSpace: "pre-wrap" }}>
            <b>description:</b> <br /> ({product.description})
          </p>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.btn}>
          <b>ADD TO CART</b>
        </button>
        <button className={styles.btn}>
          <b>BUY</b>
        </button>
      </div>
    </div>
  );
}
