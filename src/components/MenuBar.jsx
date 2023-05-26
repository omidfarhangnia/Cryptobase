import React from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { handleOffCanvasChange } from "./Header";
import { usePageData } from "../context/ContextData";
import { MdStars } from "react-icons/md";

const MenuBar = () => {
  const { userData, handleLogOut } = usePageData();

  return (
    <div>
      <div
        id="burgerPage"
        className="hidden ml:hidden fixed top-0 left-0 w-[100vw] h-[100vh] flex-col items-center justify-center bg-gradient-to-tr from-[#FFD77B] to-[#BFDCAE]"
      >
        <div
          className="flex w-[70vw] justify-between items-center mb-[10vh]"
          onClick={() => handleOffCanvasChange("hide")}
        >
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
          <RxCross1 size={23} className="cursor-pointer" />
        </div>
        <nav className="block w-[90%] mb-[15vh]">
          <ul className="flex flex-col h-[30vh] justify-between items-center">
            <Link onClick={() => handleOffCanvasChange("hide")}>
              <li className="text-mono group cursor-pointer capitalize text-[20px] text-center font-semibold">
                <span className="group-hover:text-dollor transition">
                  trending
                </span>{" "}
                <span className="group-hover:text-coin transition">coins</span>
              </li>
            </Link>
            <Link onClick={() => handleOffCanvasChange("hide")}>
              <li className="text-mono group cursor-pointer capitalize text-[20px] text-center font-semibold">
                <span className="group-hover:text-dollor transition">
                  highest
                </span>{" "}
                <span className="group-hover:text-coin transition">profit</span>
              </li>
            </Link>
            <Link onClick={() => handleOffCanvasChange("hide")}>
              <li className="text-mono group cursor-pointer capitalize text-[20px] text-center font-semibold">
                <span className="group-hover:text-dollor transition">
                  highest
                </span>{" "}
                <span className="group-hover:text-coin transition">loss</span>
              </li>
            </Link>
            <Link onClick={() => handleOffCanvasChange("hide")}>
              <li className="text-mono group cursor-pointer capitalize text-[20px] text-center font-semibold">
                <span className="group-hover:text-dollor transition">
                  crypto
                </span>{" "}
                <span className="group-hover:text-coin transition">news</span>
              </li>
            </Link>
          </ul>
        </nav>
        <div className="flex flex-col w-[75%] justify-center items-center gap-3">
          {userData ? (
            <>
              <div className="flex w-full justify-between items-center">
                <Link to="/">
                  <button
                    className="text-[17px] text-center min-w-[120px] w-[30%] uppercase border-2 font-mono font-bold border-solid rounded-lg border-dollor px-2 py-2"
                    onClick={() => {
                      handleLogOut();
                      handleOffCanvasChange("hide");
                    }}
                  >
                    log out
                  </button>
                </Link>
                <Link
                  to="/account"
                  onClick={() => {
                    handleOffCanvasChange("hide");
                  }}
                  className="inline-block ml-5"
                >
                  <MdStars size={35} fill="#F2A900" />
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link to="/signin" onClick={() => handleOffCanvasChange("hide")}>
                <button className="text-[20px] text-center min-w-[80vw] uppercase border-2 font-mono font-bold border-solid rounded-lg border-dollor px-2 py-2">
                  sign in
                </button>
              </Link>
              <Link to="/signup" onClick={() => handleOffCanvasChange("hide")}>
                <button className="text-[20px] text-center min-w-[80vw] uppercase border-2 font-mono font-bold border-solid rounded-lg border-coin px-2 py-2">
                  sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      <div
        id="sliceContainer"
        className="hidden fixed top-0 left-0 h-[100vh] w-[100vw]"
      >
        <div className="slices absolute w-full h-0 bg-dollor top-0"></div>
        <div className="slices absolute w-full h-0 bg-coin top-[20vh]"></div>
        <div className="slices absolute w-full h-0 bg-dollor top-[40vh]"></div>
        <div className="slices absolute w-full h-0 bg-coin top-[60vh]"></div>
        <div className="slices absolute w-full h-0 bg-dollor top-[80vh]"></div>
      </div>
    </div>
  );
};

export default MenuBar;
