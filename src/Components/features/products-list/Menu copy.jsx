import { useLoaderData } from "react-router-dom";
import { getProductsList } from "../../services/helper";
import Product from "./Product";

function ProductsList() {
  const productsList = useLoaderData();

  return (
    <ul className="">
      {productsList.map((pizza) => (
        <Product pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const productsList = await getProductsList();
  return productsList;
}

export default ProductsList;
