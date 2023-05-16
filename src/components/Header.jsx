import React from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { gsap } from "gsap";

const Header = () => {
  function handleOffCanvasChange(status) {
    const sliceContainer = document.getElementById("sliceContainer");
    const slices = sliceContainer.querySelectorAll(".slices");
    const burgerPage = document.getElementById("burgerPage");

    function onCompleteFunc(status) {
      burgerPage.classList.remove(status === "show" ? "hidden" : "flex");
      burgerPage.classList.add(status === "show" ? "flex" : "hidden");
      sliceContainer.classList.add("hidden");
    }

    if (status === "show") {
      sliceContainer.classList.remove("hidden");
      gsap.fromTo(
        slices,
        { height: 0 },
        {
          height: "20vh",
          duration: 1.5,
          ease: "power3.out",
          onComplete: () => {
            gsap.delayedCall(0.6, onCompleteFunc, [status]);
          },
        }
      );
    } else if (status === "hide") {
      sliceContainer.classList.remove("hidden");
      gsap.fromTo(
        slices,
        { height: 0 },
        {
          height: "20vh",
          duration: 1.5,
          ease: "power3.out",
          onComplete: () => {
            gsap.delayedCall(0.6, onCompleteFunc, [status]);
          },
        }
      );
    }
  }

  return (
    <header className="flex justify-between items-center px-6 md:px-8 py-10">
      <div className="uppercase w-[25%] lg:w-[20%]">
        <span className="text-coin font-pacifico text-[20px] md:text-[26px]">
          crypto
        </span>
        <span className="text-dollor font-teko text-[26px] md:text-[35px]">
          base
        </span>
      </div>
      <nav className="hidden ml:block w-[40%] lg:w-[50%]">
        <ul className="flex justify-between items-center">
          <Link>
            <li className="text-mono group cursor-pointer capitalize text-[16px] lg:text-[20px] text-center font-semibold">
              <span className="group-hover:text-dollor transition">
                trending
              </span>{" "}
              <span className="group-hover:text-coin transition">coins</span>
            </li>
          </Link>
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
        <Link to="/signup">
          <button className="text-[15px] lg:text-[18px] md:px-5 uppercase border-2 font-mono font-bold border-solid rounded-lg border-dollor px-2 py-2">
            sign in
          </button>
        </Link>
        <Link to="/signin">
          <button className="text-[15px] lg:text-[18px] md:px-5 uppercase border-2 font-mono font-bold border-solid rounded-lg border-coin px-2 py-2">
            sign up
          </button>
        </Link>
      </div>
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
            <Link>
              <li className="text-mono group cursor-pointer capitalize text-[20px] text-center font-semibold">
                <span className="group-hover:text-dollor transition">
                  trending
                </span>{" "}
                <span className="group-hover:text-coin transition">coins</span>
              </li>
            </Link>
            <Link>
              <li className="text-mono group cursor-pointer capitalize text-[20px] text-center font-semibold">
                <span className="group-hover:text-dollor transition">
                  highest
                </span>{" "}
                <span className="group-hover:text-coin transition">profit</span>
              </li>
            </Link>
            <Link>
              <li className="text-mono group cursor-pointer capitalize text-[20px] text-center font-semibold">
                <span className="group-hover:text-dollor transition">
                  highest
                </span>{" "}
                <span className="group-hover:text-coin transition">loss</span>
              </li>
            </Link>
            <Link>
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
          <Link to="/signup">
            <button className="text-[20px] min-w-[80vw] uppercase border-2 font-mono font-bold border-solid rounded-lg border-dollor px-2 py-2">
              sign in
            </button>
          </Link>
          <Link to="/signin">
            <button className="text-[20px] min-w-[80vw] uppercase border-2 font-mono font-bold border-solid rounded-lg border-coin px-2 py-2">
              sign up
            </button>
          </Link>
        </div>
      </div>
      <div
        onClick={() => handleOffCanvasChange("show")}
        className="flex ml:hidden cursor-pointer flex-col border-2 border-solid border-coin gap-[15%] rounded-lg w-[55px] h-[55px] items-center justify-center"
      >
        <div className="h-[10%] w-[83%] bg-dollor rounded-[50px]"></div>
        <div className="h-[10%] w-[83%] bg-dollor rounded-[50px]"></div>
        <div className="h-[10%] w-[83%] bg-dollor rounded-[50px]"></div>
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
    </header>
  );
};

export default Header;
