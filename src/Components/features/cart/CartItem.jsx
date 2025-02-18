import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ product }) {
  const { id, name, quantity, unitPrice } = product;
  const currentQuantity = useSelector((state) =>
    getCurrentQuantityById(id)(state)
  );

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
      <p className="mb-1 sm:mb-0">
        {quantity}× {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">
          {formatCurrency(quantity * unitPrice)}
        </p>
        <UpdateItemQuantity productId={id} currentQuantity={currentQuantity} />
        <DeleteItem productId={id} />
      </div>
    </div>
  );
}

export default CartItem;
