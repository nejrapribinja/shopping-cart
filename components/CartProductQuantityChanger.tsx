interface Props {
  quantity: string;
}

const CartProductQuantityChanger: React.FC<Props> = ({ quantity }) => {
  return (
    <div>
      <span className="bg-[#1c1c60] border border-slate-300 p-4 text-white cursor-pointer">+</span>
      <span className="border border-y-slate-300 p-4">{quantity}</span>
      <span className="bg-slate-400 border border-slate-300 p-4 cursor-pointer">-</span>
    </div>
  );
};

export default CartProductQuantityChanger;
