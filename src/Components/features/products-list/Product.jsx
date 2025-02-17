import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { productsList } from "../../services/data";
import plus from "../../../assets/plus.svg";

function Product({ productId }) {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const allProducts = Object.values(productsList).flat();
  const product = allProducts.find((p) => p.id === productId);

  const currentQuantity = useSelector(getCurrentQuantityById(product?.id || 0));
  const isInCart = currentQuantity > 0;

  if (!product) return null;

  const { id, name, unitPrice, soldOut, mainImage, description, images } =
    product;
  const imageList = images?.length ? [mainImage, ...images] : [mainImage];

  function handleAddToCart() {
    dispatch(
      addItem({
        productId: id,
        name,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice,
      })
    );
  }

  function openModal() {
    setIsModalOpen(true);
    setSelectedImageIndex(0);
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
              <p className="text-[0.9rem] text-[#5A4034] font-medium mt-1">
                ${unitPrice.toFixed(2)}
              </p>
            ) : (
              <p className="text-[0.9rem] text-[#5A4034] font-medium">
                Sold out
              </p>
            )}
            {!soldOut && !isInCart && (
              <div
                className="absolute top-4 right-4 bg-[#F6E6DA] rounded-md w-7 h-7 flex justify-center items-center hover:bg-[#e2ad8f] transition-all duration-500 opacity-0 group-hover:opacity-100"
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
              className="absolute top-5 right-5 w-7 h-7 bg-[#F6E6DA] rounded-md flex justify-center items-center hover:bg-[#e2ad8f] transition-all duration-500 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </div>

            <div className="grid grid-cols-2 gap-5 items-start mt-5">
              <div className="col-span-1 flex flex-col self-start h-[25rem] gap-4">
                <div className="border border-amber-200 w-[19rem] h-[18rem] rounded-2xl overflow-hidden">
                  <img
                    src={imageList[selectedImageIndex]}
                    alt={name}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Circular Navigation Dots */}
                <div className="flex justify-center gap-4 mt-3">
                  {imageList.map((_, index) => (
                    <div
                      key={index}
                      className={`w-4 h-4 rounded-full cursor-pointer ${
                        selectedImageIndex === index
                          ? "bg-amber-500"
                          : "bg-gray-300"
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="col-span-1">
                <p className="font-['Quicksand'] text-[1.2rem] text-[#5A4034] font-semibold">
                  {name}
                </p>
                <p className="text-[0.9rem] text-[#5A4034] font-medium">
                  {description}
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
