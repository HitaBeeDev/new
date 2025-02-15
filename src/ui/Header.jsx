// import { Link } from "react-router-dom";
// import SearchOrder from "../features/order/SearchOrder";
// import Username from "../features/user/Username";

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
  return (
    <div className="grid grid-cols-2 justify-between items-center pl-16 pr-16 pt-6">
      <div className="flex justify-between items-center col-span-1">
        <Link
          to="/"
          className="font-['Playfair_Display'] font-bold text-lg cursor-pointer"
        >
          Élan Beauty
        </Link>

        <p
          className="font-['Libre_Baskerville'] text-[0.8rem] font-medium cursor-pointer 
  border border-transparent hover:border-[#F6E6DA] transition-all duration-500 
  h-8 w-28 rounded-[1rem] flex justify-center items-center"
        >
          Our Story
        </p>

        <p
          className="font-['Libre_Baskerville'] text-[0.8rem] font-medium cursor-pointer 
  border border-transparent hover:border-[#F6E6DA] transition-all duration-500 
  h-8 w-32 rounded-[1rem] flex justify-center items-center"
        >
          Our Products
        </p>

        <p
          className="font-['Libre_Baskerville'] text-[0.8rem] font-medium cursor-pointer 
  border border-transparent hover:border-[#F6E6DA] transition-all duration-500 
  h-8 w-40 rounded-[1rem] flex justify-center items-center"
        >
          Customer Reviews
        </p>
      </div>

      <div className="col-span-1 flex justify-end">
        <div>
          <Link to="/menu">
            <button
              className="font-['Libre_Baskerville'] text-[0.85rem] border border-[#F6E6DA] rounded-[1rem]
        h-9 w-36 hover:bg-[#D4B189]/50 cursor-pointer hover:border-[#FFFBF5] transition-all duration-500"
            >
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
