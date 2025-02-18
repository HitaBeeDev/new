import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  console.log(cart); // Log the cart state to verify its contents

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mt-6 pl-16 pr-16 flex flex-col justify-center items-center">
      <p className="font-['Quicksand'] text-[1.5rem] text-[#2e1f1a] font-[500] leading-[6rem] tracking-[0.15rem]">
        Your Shopping Basket
      </p>

      <ul className="mt-8 w-full list-disc pl-6">
        {cart.map((product) => (
          <li key={product.id} className="mb-4 border-b pb-2">
            <CartItem product={product} />
          </li>
        ))}
      </ul>

      <button
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
