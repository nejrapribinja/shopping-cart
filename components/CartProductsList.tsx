import productslist from "@/utils/productslist.json";
import CartProduct from "./CartProduct";

const CartProductsList = () => {
  return (
    <>
      {productslist.map((product, index: number) => (
        <CartProduct
          key={index}
          image={product.image}
          title={product.title}
          code={product.code}
          size={product.size}
          quantity={product.quantity}
          price={product.price}
        />
      ))}
    </>
  );
};

export default CartProductsList;
