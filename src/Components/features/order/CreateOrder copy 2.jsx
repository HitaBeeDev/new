import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import store from "../../../store";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mt-6 flex flex-col justify-center items-center">
      <p className="font-['Quicksand'] text-[1.2rem] text-[#2e1f1a] font-[500] leading-[6rem] tracking-[0.15rem]">
        Ready to place your order? Let’s make it happen!
      </p>

      {/* #F6E6DA  (Soft Nude)
 #FFFBF5  (Ivory White)
 #E8B4B8  (Muted Rose)
 #9C8F8F  (Satin Taupe)
 #5A4034  (Deep Espresso)
#D4B189  (Subtle Gold) */}

      <Form method="POST">
        <div className="mt-6 border border-[#FFFBF5] pt-5 pb-5 pl-8 pr-8 rounded-[1.5rem] shadow-md w-[50rem]">
          <div className="flex flex-row gap-3 items-end">
            <label className="font-['Quicksand'] font-medium text-[0.9rem]">
              First Name
            </label>

            <input
              className="border border-[#F6E6DA] rounded-[1rem] font-['Quicksand'] font-medium text-[0.9rem] h-[1.8rem] w-[15rem]"
              type="text"
              name="customer"
              defaultValue={username}
              required
            />
          </div>

          <div className="flex flex-row gap-3 items-end">
            <label className="font-['Quicksand'] font-medium text-[0.9rem]">
              Phone number
            </label>

            <div>
              <input
                className="border border-[#F6E6DA] rounded-[1rem] font-['Quicksand'] font-medium text-[0.9rem] h-[1.8rem] w-[15rem]"
                type="tel"
                name="phone"
                required
              />
              {formErrors?.phone && (
                <p className="text-[#2e1f1a] font-[500] text-xs">
                  {formErrors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-row gap-3 items-end">
            <label className="font-['Quicksand'] font-medium text-[0.9rem]">
              Address
            </label>

            <div>
              <input
                className="border border-[#F6E6DA] rounded-[1rem] font-['Quicksand'] font-medium text-[0.9rem] h-[1.8rem] w-[15rem]"
                type="text"
                name="address"
                disabled={isLoadingAddress}
                defaultValue={address}
                required
              />
              {addressStatus === "error" && <p>{errorAddress}</p>}
            </div>

            {!position.latitude && !position.longitude && (
              <div>
                <button
                  disabled={isLoadingAddress}
                  type="small"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-row gap-3 items-end">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            />

            <label
              className="font-['Quicksand'] font-medium text-[0.9rem]"
              htmlFor="priority"
            >
              Want to yo give your order priority?
            </label>
          </div>

          <div className="flex flex-row gap-3 items-end bg-red-400">
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <input
              type="hidden"
              name="position"
              value={
                position.longitude && position.latitude
                  ? `${position.latitude},${position.longitude}`
                  : ""
              }
            />

            <button disabled={isSubmitting || isLoadingAddress}>
              {isSubmitting
                ? "Placing order...."
                : `Order now from ${formatCurrency(totalPrice)}`}
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  // Do NOT overuse
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
