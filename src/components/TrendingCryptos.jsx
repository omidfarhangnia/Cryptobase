import React from "react";
import { usePageData } from "../context/ContextData";
import TrendingItem from "./TrendingItem";

const TrendingCryptos = () => {
  const { trendingCryptos } = usePageData();

  return (
    <div className="bg-darkBlue p-10">
      <h2 className="text-white text-4xl md:text-5xl lg:text-6xl capitalize font-teko">
        trending cryptos
      </h2>
      <div className="flex flex-wrap justify-between bg-platinum px-5 mt-10 rounded-lg w-[90%] mx-auto">
        {trendingCryptos.map((crypto, index) => (
          <TrendingItem crypto={crypto} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TrendingCryptos;
