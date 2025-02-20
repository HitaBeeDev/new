import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="bg-[#FFFBF5] max-h-screen h-screen">
      {isLoading && <Loader />}

      <Header />

      <div className="">
        <main className="">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
