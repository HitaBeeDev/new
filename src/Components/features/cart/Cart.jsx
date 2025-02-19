import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  console.log(cart); // Log the cart state to verify its contents

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mt-6 flex flex-col justify-center items-center">
      <p className="font-['Quicksand'] text-[1.5rem] text-[#2e1f1a] font-[500] leading-[6rem] tracking-[0.15rem]">
        Your Shopping Basket
      </p>

      <div className="mt-6 border border-[#FFFBF5] w-2/3 pt-5 pb-5 pl-8 pr-8 rounded-[1.5rem] shadow-md">
        <ul className="">
          {cart.map((product) => (
            <li className="border-b border-[#F6E6DA] mb-5 p-4" key={product.id}>
              <CartItem product={product} />
            </li>
          ))}
        </ul>

        {/* #F6E6DA  (Soft Nude)
 #FFFBF5  (Ivory White)
 #E8B4B8  (Muted Rose)
 #9C8F8F  (Satin Taupe)
 #5A4034  (Deep Espresso)
#D4B189  (Subtle Gold) */}

        <div className="flex flex-row justify-between items-center mt-20">
          <div className="flex flex-row gap-5">
            <Link to="/products-list">
              <button
                className="font-['Quicksand'] font-medium text-[0.9rem] rounded-[1rem] 
        h-9 w-[9.5rem] cursor-pointer transition-all duration-500  bg-[#E8B4B8]/50 hover:bg-[#E8B4B8] border border-[#E8B4B850] hover:border-[#E8B4B8]"
              >
                Return to Menu
              </button>
            </Link>
            <button
              className="font-['Quicksand'] font-medium text-[0.9rem] rounded-[1rem] text-[ #5A4034]
        h-9 w-40 cursor-pointer transition-all duration-500 bg-[#FFFBF5] hover:bg-[#FFFBF5] border border-[#9C8F8F] hover:border-[#9C8F8F]"
              onClick={() => dispatch(clearCart())}
            >
              Remove All Items
            </button>
          </div>

          <div
            className="h-9 w-[8.5rem] cursor-pointer rounded-[1rem] border border-[#9C8F8F] flex justify-center items-center
          transition-all duration-500 hover:bg-[#E8B4B8] bg-[#9C8F8F] hover:border-[#E8B4B8]"
          >
            <Link
              className="font-['Quicksand'] font-medium text-[0.9rem] text-[#FFFBF5]"
              to="/order/new"
            >
              Order pizzas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
