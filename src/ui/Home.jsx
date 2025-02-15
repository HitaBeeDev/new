// import { useSelector } from "react-redux";
// import CreateUser from "../features/user/CreateUser";
// import Button from "./Button";
import { Link } from "react-router-dom";
import home from "../assets/home4.jpg";

function Home() {
  // const username = useSelector((state) => state.user.username);

  return (
    <div className="grid grid-cols-2 gap-3 h-screen max-h-screen mt-6 pl-16 pr-16 overflow-hidden">
      <div className="col-span-1 bg-red-100 rounded-[1.5rem] h-[83%] max-h-[83%] overflow-hidden">
        <img
          className="relative rounded-[1.5rem] w-full h-full max-h-full object-cover object-center"
          src={home}
          alt="home"
        />

        <div className="absolute">
          <div>
            <Link to="/menu">
              <button
                className="font-['Quicksand'] font-medium text-[0.9rem] border border-[#F6E6DA] rounded-[1rem]
        h-9 w-36 hover:bg-[#D4B189]/50 cursor-pointer hover:border-[#FFFBF5] transition-all duration-500"
              >
                Start Shopping
              </button>
            </Link>
          </div>

          <div>
            <Link>
              <button
                className="font-['Quicksand'] font-medium text-[0.9rem] border border-[#F6E6DA] rounded-[1rem]
        h-9 w-36 hover:bg-[#D4B189]/50 cursor-pointer hover:border-[#FFFBF5] transition-all duration-500"
              >
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-1 bg-red-200 rounded-[1.5rem] h-[83%] max-h-[83%]"></div>
    </div>
  );
}

export default Home;
