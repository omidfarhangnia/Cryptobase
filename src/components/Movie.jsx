import React, { useEffect, useLayoutEffect } from "react";
import coinMovie from "../movies/coin-movie.mp4";
import { gsap } from "gsap";

const Movie = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".headerTopLayer",
      { bottom: 0 },
      {
        bottom: "100%",
        stagger: {
          each: 0.1,
        },
        duration: 0.6,
        delay: 0.3,
      }
    ).fromTo(
      ".headerBtns",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "expo.in",
      }
    );
  }, []);
  return (
    <div className="relative bg-black">
      <div>
        <video
          autoPlay
          loop
          muted
          className="w-[100vw] min-h-[400px] md:h-[100vh] object-cover"
        >
          <source src={coinMovie} type="video/mp4" />
          <p>sorry your browser cant support videos</p>
        </video>
      </div>
      <div className="absolute w-full h-full bg-black/80 top-0 left-0"></div>
      <div className="px-[5vw] items-center absolute top-[15%] ml:top-[5%] flex flex-wrap gap-[1vw] select-none">
        <div className="header-test-shadow px-[10px] relative flex h-auto w-auto text-[14vw] capitalize text-platinum font-teko overflow-hidden">
          <span>are</span>
          <span className="headerTopLayer absolute bg-dollor block bg-red w-[100%] h-[100%]"></span>
        </div>
        <div className="header-test-shadow px-[10px] relative flex h-auto w-auto text-[14vw] capitalize text-platinum font-teko overflow-hidden">
          <span>you</span>
          <span className="headerTopLayer absolute bg-coin block bg-red w-[100%] h-[100%]"></span>
        </div>
        <div className="header-test-shadow px-[10px] relative flex h-auto w-auto text-[14vw] capitalize text-platinum font-teko overflow-hidden">
          <span>ready</span>
          <span className="headerTopLayer absolute bg-dollor block bg-red w-[100%] h-[100%]"></span>
        </div>
        <div className="header-test-shadow px-[10px] relative flex h-auto w-auto text-[14vw] capitalize text-platinum font-teko overflow-hidden">
          <span>for</span>
          <span className="headerTopLayer absolute bg-coin block bg-red w-[100%] h-[100%]"></span>
        </div>
        <div className="header-test-shadow px-[10px] relative flex h-auto w-auto text-[14vw] capitalize text-platinum font-teko overflow-hidden">
          <span>big</span>
          <span className="headerTopLayer absolute bg-coin block bg-red w-[100%] h-[100%]"></span>
        </div>
        <div className="header-test-shadow px-[10px] relative flex h-auto w-auto text-[14vw] capitalize text-platinum font-teko overflow-hidden">
          <span>changes</span>
          <span className="headerTopLayer absolute bg-dollor block bg-red w-[100%] h-[100%]"></span>
        </div>
        <div className="px-[10px] mx-auto relative flex gap-[30px] ml:gap-[2vw] h-auto w-auto md:text-[5vw] text-[30px] capitalize text-platinum font-teko overflow-hidden">
          <a href="#crypto_page" className="headerBtns">
            <button className="uppercase text-dollor">yes</button>
          </a>
          <button
            className="uppercase text-coin headerBtns"
            onClick={() => {
              window.close();
            }}
          >
            no
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
