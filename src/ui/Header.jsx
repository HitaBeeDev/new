// import { Link } from "react-router-dom";
// import SearchOrder from "../features/order/SearchOrder";
// import Username from "../features/user/Username";

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
        <p className="font-['Playfair_Display'] font-semibold text-lg">
          Élan Beauty
        </p>

        <p className="font-['Libre_Baskerville'] text-[0.8rem] font-medium">
          Our Story
        </p>

        <p className="font-['Libre_Baskerville'] text-[0.8rem]">Our Products</p>

        <p className="font-['Libre_Baskerville'] text-[0.8rem]">
          Customer Reviews
        </p>
      </div>

      <div className="col-span-1 flex justify-end">
        <p className="font-['Libre_Baskerville'] text-[0.8rem]">
          Start Shopping
        </p>
      </div>
    </div>
  );
}

export default Header;
