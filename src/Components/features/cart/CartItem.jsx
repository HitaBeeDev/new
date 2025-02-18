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
          <tr className="h-10 border-b border-[#F6E6DA]">
            <th className="w-3/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034] pb-1">
              Product
            </th>

            <th className="w-3/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034] pb-1">
              Product Name
            </th>

            <th className="w-2/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034] pb-1">
              Price
            </th>

            <th className="w-2/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034] pb-1">
              Quantity
            </th>

            <th className="w-2/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034] pb-1">
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
