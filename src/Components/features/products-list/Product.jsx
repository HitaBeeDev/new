import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { productsList } from "../../services/data";
import plus from "../../../assets/plus.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

function Product({ productId }) {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const allProducts = Object.values(productsList).flat();
  const product = allProducts.find((p) => p.id === productId);

  const currentQuantity = useSelector(getCurrentQuantityById(product?.id || 0));
  const isInCart = currentQuantity > 0;

  if (!product) return null;

  const { id, name, unitPrice, soldOut, mainImage, description } = product;

  function handleAddToCart() {
    dispatch(
      addItem({
        productId: id,
        name,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice * 1,
        mainImage,
      })
    );
  }

  function openModal() {
    setIsModalOpen(true);
    setSelectedImageIndex(0);
    setFade(true);
  }

  return (
    <>
      <div
        className="h-[23rem] rounded-xl shadow-sm p-5 flex flex-col justify-between ite cursor-pointer group relative"
        onClick={openModal}
      >
        <div className="flex justify-center items-center flex-grow">
          <div className="w-[14rem] h-[14rem] flex justify-center items-center">
            <img
              src={mainImage}
              alt={name}
              className={`object-contain w-full h-full ${
                soldOut ? "opacity-70 grayscale" : ""
              }`}
            />
          </div>
        </div>

        <div className="flex flex-col justify-between h-full">
          <p className="font-['Quicksand'] text-[0.9rem] text-[#5A4034] font-semibold">
            {name}
          </p>

          <p className="text-[0.75rem] text-[#5A4034] font-normal pt-1 flex-grow">
            {description}
          </p>

          <div className="mt-auto">
            {!soldOut ? (
              <p className="text-[0.9rem] text-[#5A4034] font-semibold mt-1">
                €{unitPrice.toFixed(2)}
              </p>
            ) : (
              <p className="text-[0.9rem] text-[#D4B189] font-semibold">
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

      {/* {isModalOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-10 rounded-xl shadow-md w-full max-w-[50rem] relative h-[30rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute text-[0.8rem]
               top-5 right-5 w-6 h-6 bg-[#F6E6DA] rounded-md flex justify-center items-center hover:bg-[#e2ad8f] transition-all duration-500 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </div>

            <div className="grid grid-cols-2 gap-5 items-start mt-1">
              <div className="col-span-1 flex flex-col self-start h-[25rem] gap-4 rounded-2xl shadow-sm relative">
                <div className="overflow-hidden rounded-xl flex justify-center items-center h-full">
                  <img
                    src={imageList[selectedImageIndex]}
                    alt={name}
                    className={`object-cover w-full h-full transition-opacity duration-150 ${
                      fade ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                  {imageList.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full cursor-pointer ${
                        selectedImageIndex === index
                          ? "bg-[#E8B4B8]"
                          : "bg-[#F6E6DA]"
                      }`}
                      onClick={() => handleImageChange(index)}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="col-span-1 pl-3">
                <p className="font-['Quicksand'] pt-3 text-[1.3rem] text-[#5A4034] font-semibold">
                  {name}
                </p>

                <p className="text-[0.8rem] text-[#5A4034] font-normal pt-1">
                  {description}
                </p>

                <div className="border border-[#F6E6DA] mt-5 p-3 rounded-xl">
                  <div className="flex flex-row items-center gap-1">
                    <FontAwesomeIcon
                      className="text-[#9C8F8F] w-4 font-normal"
                      icon={faCircleQuestion}
                    />

                    <p className="font-['Quicksand'] text-[0.9rem] text-[#9C8F8F] font-medium">
                      Application Guidelines
                    </p>
                  </div>

                  {application?.length ? (
                    application.map((item, index) => (
                      <p
                        key={index}
                        className="font-['Quicksand'] mt-1 pl-2 text-[0.8rem] text-[#5A4034] font-medium"
                      >
                        - {item}
                      </p>
                    ))
                  ) : (
                    <p className="font-['Quicksand'] p-1 text-[0.8rem] text-[#5A4034] font-medium">
                      No application instructions available
                    </p>
                  )}
                </div>

                <div className="mt-5 flex flex-row items-start gap-2">
                  <FontAwesomeIcon
                    className="text-[#E8B4B8] w-5 font-normal"
                    icon={faBell}
                  />

                  <p className="font-['Quicksand'] text-[0.75rem] text-[#5A4034] font-normal">
                    {text || "No additional information available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Product;
