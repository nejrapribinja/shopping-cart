import CartProductsHeading from "./CartProductsHeading";
import CartProductsList from "./CartProductsList";

const CartProducts = () => {
  return (
    <table className="table-auto w-[80%]">
      <CartProductsHeading />
      <tbody>
        <CartProductsList />
      </tbody>
    </table>
  );
};

export default CartProducts;
