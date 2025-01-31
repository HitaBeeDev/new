import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />

      <div>
        <Outlet />
        <CartOverview />
      </div>
    </div>
  );
}

export default AppLayout;
