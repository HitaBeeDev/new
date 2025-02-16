// import { useSelector } from "react-redux";
// import CreateUser from "../features/user/CreateUser";
// import Button from "./Button";
import { Link } from "react-router-dom";
import home from "../../assets/home4.jpg";
import grid from "../../assets/grid1.jpg";

function Home() {
  // const username = useSelector((state) => state.user.username);

  return (
    <div className="mt-6 grid grid-cols-2 gap-3 h-screen max-h-screen pl-16 pr-16">
      <div className="col-span-1 bg-red-100 rounded-[1.5rem] h-[58%] max-h-[58%] relative">
        <img
          className="rounded-[1.5rem] w-full h-full max-h-full object-cover object-center"
          src={home}
          alt="home"
        />

        <div className="absolute bottom-4 left-4 flex gap-4">
          <Link to="/products-list">
            <button
              className="font-['Quicksand'] font-medium text-[0.9rem] rounded-[1rem]
              h-9 w-36 cursor-pointer transition-all duration-500 bg-white hover:bg-[#F6E6DA] border-white hover:border-[#F6E6DA]"
            >
              Start Shopping
            </button>
          </Link>

          <Link>
            <button
              className="font-['Quicksand'] font-medium text-[0.9rem] rounded-[1rem]
              h-9 w-36 cursor-pointer transition-all duration-500 border border-white text-white hover:bg-[#F6E6DA]
              hover:text-[#5A4034] hover:border-[#F6E6DA]"
            >
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      <div className="col-span-1 rounded-[1.5rem] h-[58%] max-h-[58%] grid grid-rows-8 gap-4">
        <div className="h-full rounded-[1.5rem] bg-[#F6E6DA] row-span-6 p-[2rem] flex flex-col justify-between">
          <div>
            <p className="font-['Quicksand'] text-[3.2rem] text-[#5A4034] font-[300] leading-[5rem] tracking-[0.3rem]">
              About
            </p>
            <p className="font-['Quicksand'] text-[4rem] text-[#5A4034] font-[400] leading-[6rem] tracking-[0.35rem]">
              Élan Beauty
            </p>
            <p className="text-[#5A4034] pl-2 font-[300] tracking-[0.15rem] -mt-4">
              Where Luxury Meets Excellence
            </p>
          </div>

          <div>
            <p className="mt-9 text-[0.8rem] font-normal text-[#5A4034]">
              <span className="font-medium">Élan Beauty</span> embodies luxury,
              offering an exclusive selection of high-end beauty, skincare, and
              wellness essentials. Partnering with the world’s most prestigious
              brands and visionary innovators, we curate an unparalleled
              collection of transformative products that exude sophistication,
              performance, and indulgence. With an uncompromising dedication to
              quality, every detail is meticulously crafted to redefine the art
              of self-care.
            </p>

            <p className="mt-2 text-[0.8rem] font-normal text-[#5A4034]">
              From rare, potent formulations to groundbreaking skincare
              innovations, our curated selection elevates beauty rituals to the
              extraordinary. Experience effortless elegance and refined luxury—
              where every product is a statement of excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 h-full row-span-2">
          <div className="col-span-1 rounded-[1.5rem] relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${grid})`,
                opacity: 0.4,
              }}
            ></div>

            <div className="relative p-5">
              <p className="text-[1.5rem] font-[400]  text-[#9C8F8F] tracking-[0.12rem]">
                Stay vibrant, stay{" "}
                <span className="text-[#5A4034] font-semibold">Élan</span>.
              </p>

              <p className="mt-3 text-[#5A4034] text-[0.8rem]">
                Elevate your beauty routine with products designed for
                effortless glow and everyday confidence.
              </p>
            </div>
          </div>

          <div
            className="col-span-1 bg-[#E8B4B8]/30 text-[#5A4034]
          rounded-[1.5rem] flex items-center justify-center font-semibold text-xl tracking-[0.15rem]"
          >
            Join&nbsp;<span className="ml-1">+25K</span>&nbsp;happy users!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
