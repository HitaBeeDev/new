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
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="w-3/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034] pb-1 bg-red-50 text-center">
              <img
                className="flex justify-center items-center w-32 h-32"
                src={mainImage}
                alt={name}
              />
            </td>

            <td className="w-3/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034] pb-1 bg-red-100 text-center">
              {name}
            </td>

            <td className="w-2/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034] pb-1 bg-red-200 text-center">
              {formatCurrency(quantity * unitPrice)}
            </td>

            <td className="w-2/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034] pb-1 bg-red-300 text-center">
              <UpdateItemQuantity
                productId={id}
                currentQuantity={currentQuantity}
              />
            </td>

            <td className="w-2/12 font-['Quicksand'] text-[0.9rem] font-medium text-[#5A4034] pb-1 bg-red-400 text-center">
              <DeleteItem productId={id} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartItem;
