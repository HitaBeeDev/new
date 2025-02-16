import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { productsList } from "../../services/data";
import plus from "../../../assets/plus.svg";

function Product({ productId }) {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const allProducts = Object.values(productsList).flat();
  const product = allProducts.find((p) => p.id === productId);

  const currentQuantity = useSelector(getCurrentQuantityById(product?.id || 0));
  const isInCart = currentQuantity > 0;

  if (!product) return null;

  const {
    id,
    name,
    unitPrice,
    soldOut,
    mainImage,
    description,
    images,
    application,
    text,
  } = product;

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

  function openModal() {
    setIsModalOpen(true);
    setSelectedImage(mainImage); // Set the default image when opening modal
  }

  return (
    <>
      {/* Product Card */}
      <div
        className="h-[20rem] rounded-xl shadow-sm p-5 flex flex-col justify-between cursor-pointer group relative"
        onClick={openModal}
      >
        <div className="flex justify-center items-center">
          <img
            src={mainImage}
            alt={name}
            className={`w-[88%] ${soldOut ? "opacity-70 grayscale" : ""}`}
          />
        </div>

        <div>
          <p className="font-['Quicksand'] text-[0.9rem] text-[#5A4034] font-semibold">
            {name}
          </p>

          <div>
            {!soldOut ? (
              <p className="font-['Quicksand'] text-[0.9rem] text-[#5A4034] font-medium mt-1">
                {formatCurrency(unitPrice)}
              </p>
            ) : (
              <p className="font-['Quicksand'] text-[0.9rem] text-[#5A4034] font-medium">
                Sold out
              </p>
            )}

            {!soldOut && !isInCart && (
              <div
                className="absolute top-4 right-4 bg-[#F6E6DA] rounded-md w-7 h-7 flex justify-center items-center
             hover:bg-[#e2ad8f] transition-all duration-500 opacity-0 group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart();
                }}
              >
                <img src={plus} alt="plus" className="w-4" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail's Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-10 rounded-xl shadow-md w-full max-w-[50rem] relative h-[30rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute top-5 right-5 w-7 h-7 bg-[#F6E6DA] rounded-md flex justify-center items-center
             hover:bg-[#e2ad8f] transition-all duration-500 cursor-pointer"
            >
              <p
                className="text-[0.85rem] text-center"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 justify-between items-start mt-5">
              {/* Left Side: Images */}
              <div className="col-span-1 flex flex-col self-start h-[25rem] gap-4">
                <div className="border border-amber-200 w-[19rem] h-[18rem] rounded-2xl">
                  <img
                    src={selectedImage}
                    alt={name}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>

                <div className="flex flex-row items-start gap-3 self-start">
                  {images &&
                    images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="object-cover w-[6rem] h-[6rem] rounded-xl cursor-pointer border-2 border-transparent hover:border-amber-500"
                        onClick={() => setSelectedImage(img)}
                      />
                    ))}
                </div>
              </div>

              {/* Right Side: Product Details */}
              <div className="col-span-1">
                <p className="font-['Quicksand'] text-[1.2rem] text-[#5A4034] font-semibold">
                  {name}
                </p>

                <p className="font-['Quicksand'] text-[0.9rem] text-[#5A4034] font-medium">
                  {description}
                </p>

                <p className="font-['Quicksand'] text-[0.8rem] text-[#5A4034] font-medium">
                  {application?.length
                    ? application
                    : "No application instructions available"}
                </p>

                <p className="font-['Quicksand'] text-[0.7rem] text-[#5A4034] font-medium">
                  {text || "No additional information available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
