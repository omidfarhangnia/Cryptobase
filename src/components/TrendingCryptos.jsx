import React from "react";
import { useContextData } from "../context/ContextData";

const TrendingCryptos = () => {
  const { trendingCryptos } = useContextData();

  return (
    <div className="bg-darkBlue p-10">
      <h2 className="text-white text-4xl md:text-5xl lg:text-6xl capitalize font-teko">
        trending cryptos
      </h2>
      <div className="bg-white mt-10 rounded-lg h-[400px] w-[90%] mx-auto">
        {trendingCryptos.map((item) => <div></div>)}
      </div>
    </div>
  );
};

export default TrendingCryptos;
