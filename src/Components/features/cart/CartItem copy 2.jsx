import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ product }) {
  console.log("CartItem Product:", product);

  const { id, name, quantity, unitPrice, mainImage } = product;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between h-10 border-b border-[#F6E6DA] bg-red-100">
        <p className="w-3/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034]">
          Product
        </p>

        <p className="w-3/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034]">
          Product Name
        </p>

        <p className="w-2/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034]">
          Price
        </p>

        <p className="w-2/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034]">
          Quantity
        </p>

        <p className="w-2/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034]">
          Action
        </p>
      </div>

      {/* <div>
        <div className="w-3/12 flex justify-center items-center">
          <img className="w-28 h-28" src={mainImage} alt={name} />
        </div>

        <p className="w-3/12 font-['Quicksand'] text-[0.8rem] font-semibold text-[#5A4034] text-center">
          {name}
        </p>

        <p className="w-2/12 font-['Quicksand'] text-[0.8rem] font-semibold text-[#5A4034] text-center">
          {formatCurrency(quantity * unitPrice)}
        </p>

        <div className="w-2/12 font-['Quicksand'] text-[0.8rem] font-medium text-[#5A4034] flex justify-center items-center">
          <UpdateItemQuantity
            productId={id}
            currentQuantity={currentQuantity}
          />
        </div>

        <div className="w-2/12 font-['Quicksand'] text-[0.8rem] font-medium text-[#5A4034] pb-1 text-center">
          <DeleteItem productId={id} />
        </div>
      </div> */}
    </div>
  );
}

export default CartItem;
