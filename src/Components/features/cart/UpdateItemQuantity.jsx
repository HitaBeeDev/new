import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ productId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center gap-4">
      <button
        className="bg-[#E8B4B8] text-[#FFFBF5] w-6 h-6 text-[0.9rem] font-medium rounded-full flex justify-center items-center cursor-pointer"
        onClick={() => dispatch(decreaseItemQuantity(productId))}
      >
        <p className="text-center"> -</p>
      </button>

      <p className="font-['Quicksand'] text-[0.9rem] font-medium">
        {currentQuantity}
      </p>

      <button
        className="bg-[#E8B4B8] text-[#FFFBF5] w-6 h-6 text-[0.9rem] font-medium rounded-full flex justify-center items-center cursor-pointer"
        onClick={() => dispatch(increaseItemQuantity(productId))}
      >
        <p className="text-center"> +</p>
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
