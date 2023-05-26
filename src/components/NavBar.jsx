import React from "react";
import { Link } from "react-router-dom";
import { handleOffCanvasChange } from "./Header";
import { usePageData } from "../context/ContextData";
import { MdStars } from "react-icons/md";

const NavBar = () => {
  const { userData, handleLogOut } = usePageData();

  return (
    <div className="flex justify-between items-center px-6 md:px-8 py-10">
      <div className="uppercase w-[25%] lg:w-[20%]">
        <Link to="/">
          <span className="text-coin font-pacifico text-[20px] md:text-[26px]">
            crypto
          </span>
          <span className="text-dollor font-teko text-[26px] md:text-[35px]">
            base
          </span>
        </Link>
      </div>
      <nav className="hidden ml:block w-[40%] lg:w-[35%]">
        <ul className="flex justify-between items-center">
          <Link>
            <li className="text-mono group cursor-pointer capitalize text-[16px] lg:text-[20px] text-center font-semibold">
              <span className="group-hover:text-dollor transition">
                highest
              </span>{" "}
              <span className="group-hover:text-coin transition">profit</span>
            </li>
          </Link>
          <Link>
            <li className="text-mono group cursor-pointer capitalize text-[16px] lg:text-[20px] text-center font-semibold">
              <span className="group-hover:text-dollor transition">
                highest
              </span>{" "}
              <span className="group-hover:text-coin transition">loss</span>
            </li>
          </Link>
          <Link>
            <li className="text-mono group cursor-pointer capitalize text-[16px] lg:text-[20px] text-center font-semibold">
              <span className="group-hover:text-dollor transition">crypto</span>{" "}
              <span className="group-hover:text-coin transition">news</span>
            </li>
          </Link>
        </ul>
      </nav>
      <div className="hidden ml:flex ml:w-[25%] lg:w-[20%] justify-end items-center gap-3">
        {userData ? (
          <>
            <button
              className="text-[15px] lg:text-[18px] md:px-5 uppercase border-2 font-mono font-bold border-solid rounded-lg border-dollor px-2 py-2"
              onClick={handleLogOut}
            >
              log out
            </button>
            <Link to="/account" className="inline-block ml-5">
              <MdStars size={30} fill="#F2A900" />
            </Link>
          </>
        ) : (
          <>
            <Link to="/signin">
              <button className="text-[15px] lg:text-[18px] md:px-5 uppercase border-2 font-mono font-bold border-solid rounded-lg border-dollor px-2 py-2">
                sign in
              </button>
            </Link>
            <Link to="/signup">
              <button className="text-[15px] lg:text-[18px] md:px-5 uppercase border-2 font-mono font-bold border-solid rounded-lg border-coin px-2 py-2">
                sign up
              </button>
            </Link>
          </>
        )}
      </div>
      <div
        onClick={() => handleOffCanvasChange("show")}
        className="flex ml:hidden cursor-pointer flex-col border-2 border-solid border-coin gap-[15%] rounded-lg w-[55px] h-[55px] items-center justify-center"
      >
        <div className="h-[10%] w-[83%] bg-dollor rounded-[50px]"></div>
        <div className="h-[10%] w-[83%] bg-dollor rounded-[50px]"></div>
        <div className="h-[10%] w-[83%] bg-dollor rounded-[50px]"></div>
      </div>
    </div>
  );
};

export default NavBar;
