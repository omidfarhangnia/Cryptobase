import React, { useState } from "react";
import { useContextData } from "../context/ContextData";

const CryptoDemo = () => {
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en
  const [search, setSearch] = useState("");

  return (
    <div id="crypto_page" className="p-10 bg-platinum">
      <div className="flex flex-col gap-5">
        <h1 className="font-teko text-3xl md:text-5xl lg:text-6xl capitalize">search crypto</h1>
        <input
          value={search}
          type="text"
          className="bg-[#fefefe] border-none outline-none px-6 py-2 rounded-full md:text-[20px] md:py-4 md:px-10"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="seaarch a crypto"
        />
      </div>
      <div className="h-[600px] bg-red-400 my-10 rounded-2xl p-5">
        {/* crypto demos container */}
      </div>
    </div>
  );
};

export default CryptoDemo;
