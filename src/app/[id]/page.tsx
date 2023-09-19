import styles from "./productInfo.module.scss";
import ProductItemInfo from "../../components/productItem/productItemInfo/ProductItemInfo";
import localFont from "next/font/local";

interface Props {
  params: {
    id: string;
  };
}

const Comfortaa_Light = localFont({
  src: "../../fonts/Comfortaa-Light.ttf",
  display: "swap",
});

export default async function ProductInfo({ params: { id } }: Props) {

  const product = await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => res.json()
  );

  return (
    <div className={`${styles.ProductInfoWrapper} ${Comfortaa_Light.className}`}>
      
      <div>
        <h1>Product details</h1>
      </div>

      <ProductItemInfo product={product} id={id} />

    </div>
  );
}
