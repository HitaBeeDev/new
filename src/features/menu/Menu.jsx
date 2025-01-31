import { useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";

function Menu() {
  useLoaderData();

  return <h1>Menu</h1>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
