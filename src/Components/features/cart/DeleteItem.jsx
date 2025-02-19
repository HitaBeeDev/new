import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

function DeleteItem({ productId }) {
  const dispatch = useDispatch();

  return (
    <button
      className="bg-[#F6E6DA]/50 w-8 h-8 flex justify-center items-center text-center rounded-full cursor-pointer"
      onClick={() => {
        dispatch(deleteItem(productId));
      }}
    >
      <FontAwesomeIcon
        className="text-[0.8rem] text-[#5A4034]"
        icon={faTrashCan}
      />
    </button>
  );
}

export default DeleteItem;
