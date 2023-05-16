import React from "react";
import coinMovie from "../movies/coin-movie.mp4";

const Movie = () => {
  return (
    <div className="relative bg-black">
      <div>
        <video loop muted className="w-[100vw] min-h-[400px] md:h-[100vh] object-cover">
          <source src={coinMovie} type="video/mp4" />
          <p>sorry your browser cant support videos</p>
        </video>
      </div>
      <div className="absolute w-full h-full bg-black/80 top-0 left-0"></div>
      <div className="px-[5vw] items-center absolute top-[15%] ml:top-[5%] flex flex-wrap gap-[1vw]">
        <div className="header-test-shadow px-[10px] relative flex h-auto w-auto text-[14vw] capitalize text-platinum font-teko overflow-hidden">
          <span>are</span>
          <span className="absolute block bg-red w-[100%] h-[100%]"></span>
        </div>
        <div className="header-test-shadow px-[10px] relative flex h-auto w-auto text-[14vw] capitalize text-platinum font-teko overflow-hidden">
          <span>you</span>
          <span className="absolute block bg-red w-[100%] h-[100%]"></span>
        </div>
        <div className="header-test-shadow px-[10px] relative flex h-auto w-auto text-[14vw] capitalize text-platinum font-teko overflow-hidden">
          <span>ready</span>
          <span className="absolute block bg-red w-[100%] h-[100%]"></span>
        </div>
        <div className="header-test-shadow px-[10px] relative flex h-auto w-auto text-[14vw] capitalize text-platinum font-teko overflow-hidden">
          <span>for</span>
          <span className="absolute block bg-red w-[100%] h-[100%]"></span>
        </div>
        <div className="header-test-shadow px-[10px] relative flex h-auto w-auto text-[14vw] capitalize text-platinum font-teko overflow-hidden">
          <span>big</span>
          <span className="absolute block bg-red w-[100%] h-[100%]"></span>
        </div>
        <div className="header-test-shadow px-[10px] relative flex h-auto w-auto text-[14vw] capitalize text-platinum font-teko overflow-hidden">
          <span>changes</span>
          <span className="absolute block bg-red w-[100%] h-[100%]"></span>
        </div>
        <div className="px-[10px] mx-auto relative flex gap-[2vw] h-auto w-auto md:text-[5vw] text-[30px] capitalize text-platinum font-teko overflow-hidden">
          <a href="#crypto_page">
            <button className="uppercase text-dollor">yes</button>
          </a>
          <button
            className="uppercase text-coin"
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
