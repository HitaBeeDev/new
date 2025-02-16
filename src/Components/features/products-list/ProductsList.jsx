import { useLoaderData } from "react-router-dom";
import { getProductsList } from "../../services/apiRestaurant";
import Product from "./Product";
import { useState } from "react";

function ProductsList() {
  const productsList = useLoaderData();
  const [activeTab, setActiveTab] = useState("Skin Care");

  const products = productsList[activeTab] || [];

  return (
    <div className="mt-6 pl-16 pr-16">
      <div className="flex flex-col justify-center items-center mt-5">
        <p className="font-['Quicksand'] text-[1.5rem] text-[#2e1f1a] font-[500] leading-[6rem] tracking-[0.15rem]">
          Shop by Categories
        </p>

        <div className="flex flex-row justify-center gap-28 items-center font-['Quicksand'] font-[400] text-[0.85rem] mt-2 text-[#513a32]">
          {Object.keys(productsList).map((category) => (
            <p
              key={category}
              onClick={() => setActiveTab(category)}
              className={`cursor-pointer rounded-[1rem] h-8 w-[6.5rem] flex justify-center items-center ${
                activeTab === category
                  ? "border border-[#D4B189] font-[500]"
                  : "border border-white font-[400]"
              }`}
            >
              {category}
            </p>
          ))}
        </div>
      </div>

      {/* 🔥 Corrected to map over products from the selected category */}
      <div className="grid grid-cols-6 gap-6 mt-6">
        {products.map((product) => (
          <Product productId={product.id} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const productsList = await getProductsList();
  return productsList;
}

export default ProductsList;
