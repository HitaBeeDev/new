import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

function DeleteItem({ productId }) {
  const dispatch = useDispatch();

  return (
    <button
      className="text-[#5A4034] bg-[#F6E6DA] w-7 h-7 rounded-full cursor-pointer"
      onClick={() => dispatch(deleteItem(productId))}
    >
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
}

export default DeleteItem;
