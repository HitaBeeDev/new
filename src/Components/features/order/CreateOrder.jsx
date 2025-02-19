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
import { faBell, faLocationDot } from "@fortawesome/free-solid-svg-icons";

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

  //   {
  //     /* #F6E6DA  (Soft Nude)
  //  #FFFBF5  (Ivory White)
  //  #E8B4B8  (Muted Rose)
  //  #9C8F8F  (Satin Taupe)
  //  #5A4034  (Deep Espresso)
  // #D4B189  (Subtle Gold) */
  //   }

  return (
    <div className="mt-6 flex flex-col justify-center items-center">
      <p className="font-['Quicksand'] text-[1.2rem] text-[#2e1f1a] font-[500] leading-[6rem] tracking-[0.15rem]">
        Ready to place your order? Let’s make it happen!
      </p>

      <Form
        method="POST"
        className="mt-6 border border-[#FFFBF5] rounded-[1.5rem] shadow-md grid grid-cols-2 items-center p-5"
      >
        <div className="col-span-1 flex flex-col items-start justify-between h-full">
          <label className="font-['Quicksand'] font-medium text-[0.9rem] text-[#5A4034] mt-5">
            First Name
          </label>

          <label className="font-['Quicksand'] font-medium text-[0.9rem]  text-[#5A4034]">
            Phone number
          </label>

          <label className="font-['Quicksand'] font-medium text-[0.9rem] mb-3 text-[#5A4034]">
            Address
          </label>
        </div>

        <div className="col-span-1 flex flex-col items-start justify-start">
          <div className="">
            <input
              className="border border-[#F6E6DA] rounded-[1rem] text-[#5A4034]
            font-['Quicksand'] font-medium text-[0.85rem] h-[2.5rem] w-[18rem] pl-3 focus:outline-none focus:border-[#F6E6DA]"
              type="text"
              name="customer"
              defaultValue={username}
              required
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <input
              className="border border-[#F6E6DA] rounded-[1rem] font-['Quicksand'] font-medium 
              text-[0.85rem] h-[2.5rem] w-[18rem] mt-7 pl-3 text-[#5A4034] focus:outline-none focus:border-[#F6E6DA]"
              type="tel"
              name="phone"
              required
              placeholder="Enter your phone number"
            />

            {formErrors?.phone && (
              <div className="flex flex-row items-center mt-2">
                <FontAwesomeIcon className="text-[#E8B4B8] w-7" icon={faBell} />

                <p className="text-[#2e1f1a] font-semibold text-xs">
                  Please provide a valid phone number for contact.
                </p>
              </div>
            )}
          </div>

          <div className="mt-7 border border-[#F6E6DA] rounded-[1rem] font-['Quicksand'] font-normal h-[7rem] w-[18rem] relative pl-3">
            <input
              className="font-['Quicksand'] font-normal text-[0.8rem] h-[2.5rem] w-[18rem]"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
              placeholder="Enter your address"
            />
            {addressStatus === "error" && <p>{errorAddress}</p>}

            {!position.latitude && !position.longitude && (
              <button
                className="absolute cursor-pointer right-1 top-1"
                disabled={isLoadingAddress}
                type="small"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                <FontAwesomeIcon
                  className="text-[#5A4034] w-9"
                  icon={faLocationDot}
                />
              </button>
            )}
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-row gap-2 items-center">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            />

            <label
              className="font-['Quicksand'] font-semibold text-[0.9rem] text-[#5A4034]"
              htmlFor="priority"
            >
              Want to prioritize your order?
            </label>
          </div>

          <div className="mt-5">
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

            <button
              className="cursor-pointer"
              disabled={isSubmitting || isLoadingAddress}
            >
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
