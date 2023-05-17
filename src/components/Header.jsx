import React from "react";
import { gsap } from "gsap";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <NavBar />
    </header>
  );
};

export function handleOffCanvasChange(status) {
  const sliceContainer = document.getElementById("sliceContainer");
  const burgerPage = document.getElementById("burgerPage");


  // we have a problem
  function onCompleteFunc(status) {
    burgerPage.classList.remove(status === "show" ? "hidden" : "flex");
    burgerPage.classList.add(status === "show" ? "flex" : "hidden");
    sliceContainer.classList.add("hidden");
  }

  if (status === "show") {
    sliceContainer.classList.remove("hidden");
    gsap.fromTo(
      ".slices",
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
      ".slices",
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

export default Header;
