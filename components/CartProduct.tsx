import Image from "next/image";
import CartProductQuantityChanger from "./CartProductQuantityChanger";

interface ProductProps {
  image: string;
  title: string;
  code: string;
  size: string;
  quantity: string;
  price: string;
}

const CartProduct: React.FC<ProductProps> = ({ image, title, code, size, quantity, price }) => {
  return (
    <tr className="text-center">
      <td className="flex flex-col md:flex-row items-center">
        <div>
          <Image src={image} alt={title} width={100} height={100} />
        </div>
        <div className="ml-5">
          <p className="text-left text-xl font-bold">{title}</p>
          <p className="text-left text-sm">Product code: {code}</p>
        </div>
      </td>
      <td>
        <span className="border border-slate-300 p-4">{size}</span>
      </td>
      <td>
        <CartProductQuantityChanger quantity={quantity} />
      </td>
      <td>
        <span className="cursor-pointer border border-slate-300 p-4">x</span>
      </td>
      <td className="font-bold">${price}</td>
    </tr>
  );
};

export default CartProduct;
