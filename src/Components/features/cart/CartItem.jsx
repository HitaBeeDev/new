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
    <div className="flex justify-between items-center">
      <p className="text-md font-semibold">
        {currentQuantity} × {name}
      </p>
      <p className="text-sm font-bold">
        {formatCurrency(currentQuantity * unitPrice)}
      </p>
      <UpdateItemQuantity
        productId={productId}
        currentQuantity={currentQuantity}
      />
      <DeleteItem productId={productId} />
    </div>
  );
}

export default CartItem;
