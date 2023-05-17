import React from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { handleOffCanvasChange } from "./Header";

const MenuBar = () => {
  return (
    <div>
      <div
        id="burgerPage"
        className="hidden ml:hidden fixed top-0 left-0 w-[100vw] h-[100vh] flex-col items-center justify-center bg-gradient-to-tr from-[#FFD77B] to-[#BFDCAE]"
      >
        <div
          className="absolute top-[7vh] right-[7vh]"
          onClick={() => handleOffCanvasChange("hide")}
        >
          <RxCross1 size={23} />
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
        <div className="flex flex-col w-[90%] justify-center items-center gap-3">
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
