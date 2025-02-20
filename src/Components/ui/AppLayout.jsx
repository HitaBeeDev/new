import Header from "./Header";
import Loader from "./Loader";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="bg-[#FFFFFF] h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        <main className="h-full">
          <Outlet />
        </main>
      </div>

      {/* <CartOverview /> */}
    </div>
  );
}

export default AppLayout;
