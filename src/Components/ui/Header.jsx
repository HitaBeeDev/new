// import { Link } from "react-router-dom";
// import SearchOrder from "../features/order/SearchOrder";
// import Username from "../features/user/Username";
import { useSelector } from "react-redux";
import shoppingBag from "../../assets/shoppingBag.svg";
import {
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

// font-['Playfair_Display']
// font-['Cormorant_Garamond']

// Élan Beauty

// #F6E6DA  (Soft Nude)
// #FFFBF5  (Ivory White)
// #E8B4B8  (Muted Rose)
// #9C8F8F  (Satin Taupe)
// #5A4034  (Deep Espresso)
// #D4B189  (Subtle Gold)

function Header() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  if (!totalCartQuantity) return null;

  return (
    <div className="grid grid-cols-2 justify-between items-center pl-16 pr-16 pt-6">
      <div className="flex justify-between items-center col-span-1">
        <Link
          to="/"
          className="font-['Playfair_Display'] font-bold text-lg cursor-pointer tracking-[0.2rem]"
        >
          Élan
        </Link>

        <p
          className="font-['Quicksand'] text-[0.9rem] font-medium cursor-pointer 
  border border-transparent hover:border-[#F6E6DA] transition-all duration-500 
  h-8 w-28 rounded-[1rem] flex justify-center items-center text-[#5A4034]"
        >
          Our Story
        </p>

        <p
          className="font-['Quicksand'] text-[0.9rem] font-medium cursor-pointer 
  border border-transparent hover:border-[#F6E6DA] transition-all duration-500 
  h-8 w-32 rounded-[1rem] flex justify-center items-center text-[#5A4034]"
        >
          Our Products
        </p>

        <p
          className="font-['Quicksand'] text-[0.9rem] font-medium cursor-pointer 
  border border-transparent hover:border-[#F6E6DA] transition-all duration-500 
  h-8 w-40 rounded-[1rem] flex justify-center items-center text-[#5A4034]"
        >
          Customer Reviews
        </p>
      </div>

      <div className="col-span-1 flex justify-end items-center gap-4">
        {/* <Link to="/products-list">
          <button
            className="font-['Quicksand'] font-medium text-[0.9rem] rounded-[1rem]
      h-9 w-36 cursor-pointer transition-all duration-500 bg-white text-[#5A4034] border border-[#5A4034]
      hover:bg-[#F6E6DA] hover:border-[#F6E6DA]"
          >
            Start Shopping
          </button>
        </Link> */}

        <div className="relative">
          <img className="w-6" src={shoppingBag} alt="shopping bag" />

          <p className="absolute top-1 right-0 translate-x-1/2 -translate-y-1/2 bg-[#E8B4B8] text-white text-xs font-medium rounded-full px-1">
            {totalCartQuantity}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
