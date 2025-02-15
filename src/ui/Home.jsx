// import { useSelector } from "react-redux";
// import CreateUser from "../features/user/CreateUser";
// import Button from "./Button";
import home1 from "../assets/home1.jpg";

function Home() {
  // const username = useSelector((state) => state.user.username);

  return (
    <div className="grid grid-cols-2 gap-2 max-h-screen h-screen">
      <div className="col-span-1 bg-red-100">
        <img src={home1} alt="home" />
      </div>

      <div className="col-span-1 bg-red-200"></div>
    </div>
  );
}

export default Home;
