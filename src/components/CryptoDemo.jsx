import React, { useEffect, useState } from "react";
import { useContextData } from "../context/ContextData";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CryptoDemo = () => {
  const [search, setSearch] = useState("");
  const { cryptos } = useContextData();
  const [filteredCrypto, setFilteredCrypto] = useState([]);

  function handleChangeSearch(e) {
    setSearch(e.target.value);
    setFilteredCrypto(cryptos.filter((item) => ((item.name).toLowerCase()).startsWith((e.target.value).toLowerCase())));
  }

  return (
    <div id="crypto_page" className="p-10 bg-platinum">
      <div className="flex flex-col gap-5">
        <h1 className="font-teko text-3xl md:text-5xl lg:text-6xl capitalize">
          search crypto
        </h1>
        <input
          value={search}
          type="text"
          className="bg-[#fefefe] border-none outline-none px-6 py-2 rounded-full md:text-[20px] md:py-4 md:px-10"
          onChange={handleChangeSearch}
          placeholder="seaarch a crypto"
        />
      </div>
      <table className="bg-white mt-10 mx-auto w-[90%] rounded-lg">
        <thead>
          <tr className="border-b-4">
            <th className="py-3 capitalize font-openSans"></th>
            <th className="py-3 capitalize font-openSans">#</th>
            <th className="py-3 capitalize font-openSans text-start pl-5">
              crypto
            </th>
            <th className="py-3 capitalize font-openSans"></th>
            <th className="py-3 capitalize font-openSans">price</th>
            <th className="py-3 capitalize font-openSans">24h</th>
            <th className="py-3 capitalize font-openSans">24h volume</th>
            <th className="py-3 uppercase font-openSans">mkt</th>
            <th className="py-3 capitalize font-openSans">last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {search.length === 0 ? (
            cryptos.length > 0 ? (
              cryptos.map((crypto, index) => (
                <DemosContainer key={index} crypto={crypto} />
              ))
            ) : (
              <DemonsPlaceHolder />
            )
          ) : (
            filteredCrypto.map((crypto, index) => (
              <DemosContainer key={index} crypto={crypto} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoDemo;

export function DemosContainer({ crypto }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <tr className="text-center hover:bg-platinum transition-colors">
      <td className="py-2 pl-4">
        {isSaved ? <AiFillStar /> : <AiOutlineStar />}
      </td>
      <td className="py-2">{crypto.market_cap_rank}</td>
      <td className="py-2">
        <div className="flex ml-3 items-center gap-2">
          <img
            className="w-[30px]"
            src={crypto.image}
            alt={`this is the symbol of ${crypto.name}`}
          />
          <span>{crypto.name}</span>
        </div>
      </td>
      <td className="py-2">{crypto.symbol}</td>
      <td className="py-2">${crypto.current_price}</td>
      <td className="py-2">{crypto.price_change_24h.toFixed(3)}</td>
      <td className="py-2">{crypto.total_volume}</td>
      <td className="py-2">${crypto.market_cap}</td>
      <td className="py-2">
        <Sparklines data={crypto.sparkline_in_7d.price}>
          <SparklinesLine color="black" />
        </Sparklines>
      </td>
    </tr>
  );
}

export function DemonsPlaceHolder() {
  return <div>hello there</div>;
}
