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
    <div>
      <table className="table-fixed w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="bg-red-50 w-4/12 font-['Quicksand'] text-[0.9rem] font-medium">
              Product
            </th>

            <th className="bg-red-100 w-4/12 font-['Quicksand'] text-[0.9rem] font-medium">
              Product Name
            </th>

            <th className="bg-red-200 w-2/5 font-['Quicksand'] text-[0.9rem] font-medium">
              Price
            </th>

            <th className="bg-red-300 w-1/5 font-['Quicksand'] text-[0.9rem] font-medium">
              Quantity
            </th>

            <th className="bg-red-400 w-1/5 font-['Quicksand'] text-[0.9rem] font-medium">
              Remove
            </th>
          </tr>
        </thead>
      </table>

      {/* <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>

      <img className="w-72 h-72" src={mainImage} alt={name} />

      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">
          {formatCurrency(quantity * unitPrice)}
        </p>

        <UpdateItemQuantity productId={id} currentQuantity={currentQuantity} />
        <DeleteItem productId={id} />
      </div> */}
    </div>
  );
}

export default CartItem;
