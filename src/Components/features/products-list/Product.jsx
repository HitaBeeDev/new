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

  const { id, name, unitPrice, soldOut, imageUrl } = product;

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
    <li className="product-item">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />

      <div className="product-details">
        <p className="product-name">{name}</p>

        <p className="product-attributes">
          {product.ingredients?.join(", ") ||
            product.shades?.join(", ") ||
            product.items?.join(", ") ||
            product.features?.join(", ")}
        </p>

        <div className="product-actions">
          {!soldOut ? (
            <p className="product-price">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="product-sold-out">Sold out</p>
          )}

          {isInCart && (
            <div className="cart-controls">
              <UpdateItemQuantity
                productId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem productId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default Product;
