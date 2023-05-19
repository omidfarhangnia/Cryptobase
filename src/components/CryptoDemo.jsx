import React, { useState } from "react";
import { useContextData } from "../context/ContextData";
import CryptoItem from "./CryptoItem";

const CryptoDemo = () => {
  const [search, setSearch] = useState("");
  const { cryptos } = useContextData();

  function handleChangeSearch(e) {
    setSearch(e.target.value);
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
          className="bg-[#fefefe] border-none outline-none px-6 py-2 rounded-full md:text-[20px] md:py-4 md:px-10 tableScrollBar"
          onChange={handleChangeSearch}
          placeholder="seaarch a crypto"
        />
      </div>
      <div className="w-90% overflow-x-scroll tableScrollBar">
        <table className="bg-white mt-10 mx-auto w-[90%] rounded-lg min-h-[50vh] min-w-[1000px]">
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
            {cryptos.length > 0 ? (
              cryptos
                .filter((crypto) => {
                  if (search === "") {
                    return crypto;
                  } else {
                    return crypto.name
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  }
                })
                .map((crypto, index) => (
                  <CryptoItem key={index} crypto={crypto} />
                ))
            ) : (
              <CryptoPlaceHolder />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoDemo;

export function CryptoPlaceHolder() {
  let context = [];

  for (var i = 0; i < 10; i++) {
    let element;

    element = (
      <>
        <td className="py-4 px-2 border-2 border-solid border-platinum tablePlaceHolder"></td>
        <td className="py-4 px-2 border-2 border-solid border-platinum tablePlaceHolder"></td>
        <td className="py-4 px-2 border-2 border-solid border-platinum tablePlaceHolder"></td>
        <td className="py-4 px-2 border-2 border-solid border-platinum tablePlaceHolder"></td>
        <td className="py-4 px-2 border-2 border-solid border-platinum tablePlaceHolder"></td>
        <td className="py-4 px-2 border-2 border-solid border-platinum tablePlaceHolder"></td>
        <td className="py-4 px-2 border-2 border-solid border-platinum tablePlaceHolder"></td>
        <td className="py-4 px-2 border-2 border-solid border-platinum tablePlaceHolder"></td>
        <td className="py-4 px-2 border-2 border-solid border-platinum tablePlaceHolder"></td>
      </>
    );
    context.push(element);
  }
  return (
    <>
      {context.map((item, index) => (
        <tr className="text-center hover:bg-platinum transition-colors cursor-pointer" key={index}>{item}</tr>
      ))}
    </>
  );
}
