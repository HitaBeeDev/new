import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { productsList } from "../../services/data";

function Product({ productId }) {
  const dispatch = useDispatch();

  const allProducts = Object.values(productsList).flat();
  const product = allProducts.find((p) => p.id === productId);

  const currentQuantity = useSelector(getCurrentQuantityById(product?.id || 0));
  const isInCart = currentQuantity > 0;

  if (!product) return null;

  const { id, name, unitPrice, soldOut, mainImage } = product;

  function handleAddToCart() {
    const newItem = {
      productId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div>
      <img
        src={mainImage}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />

      <div>
        <p>{name}</p>

        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
