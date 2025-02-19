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

        <div className="flex flex-row justify-between items-center mt-20">
          <div className="flex flex-row gap-5">
            <Link to="/products-list">
              <button
                className="font-['Quicksand'] font-medium text-[0.9rem] rounded-[1rem] text-[#2e1f1a]
        h-9 w-36 cursor-pointer transition-all duration-500 bg-[#F6E6DA] hover:bg-[#F6E6DA] border border-[#F6E6DA] hover:border-[#F6E6DA]"
              >
                Return to Menu
              </button>
            </Link>
            <button
              className="font-['Quicksand'] font-medium text-[0.9rem] rounded-[1rem] text-[#2e1f1a]
        h-9 w-40 cursor-pointer transition-all duration-500 bg-[#FFFBF5] hover:bg-[#F6E6DA] border border-[#5A4034] hover:border-[#F6E6DA]"
              onClick={() => dispatch(clearCart())}
            >
              Remove All Items
            </button>
          </div>

          <div
            className="h-9 w-32 cursor-pointer rounded-[1rem] border border-[#E8B4B8]/50 flex justify-center items-center
          transition-all duration-500 bg-[#E8B4B8]/50 hover:bg-[#E8B4B8]  hover:border-[#E8B4B8]"
          >
            <Link
              className="font-['Quicksand'] font-medium text-[0.9rem] text-[#5A4034]"
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
