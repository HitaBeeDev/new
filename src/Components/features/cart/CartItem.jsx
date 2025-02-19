import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ product }) {
  const { productId, name, unitPrice } = product;
  const currentQuantity = useSelector((state) =>
    getCurrentQuantityById(productId)(state)
  );

  return (
    <div className="grid grid-cols-12 justify-center items-center">
      <div className="col-span-6 font-['Quicksand'] md:text-[0.9rem] text-[0.8rem] font-medium">
        {currentQuantity} × {name}
      </div>

      <div className="col-span-2 font-['Quicksand'] md:text-[0.9rem] text-[0.8rem] font-medium">
        {formatCurrency(currentQuantity * unitPrice)}
      </div>

      <div className="col-span-2 flex justify-center">
        <UpdateItemQuantity
          productId={productId}
          currentQuantity={currentQuantity}
        />
      </div>

      <div className="col-span-2 flex justify-center">
        <DeleteItem productId={productId} />
      </div>
    </div>
  );
}

export default CartItem;
