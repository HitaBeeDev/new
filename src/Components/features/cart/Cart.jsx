import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mt-6 pl-16 pr-16 flex flex-col justify-center items-center">
      <p className="font-['Quicksand'] text-[1.5rem] text-[#2e1f1a] font-[500] leading-[6rem] tracking-[0.15rem]">
        Your Shopping Basket
      </p>

      <div>
        {cart.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
