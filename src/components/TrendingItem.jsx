import React from "react";
import bitCoinImage from "../images/bitcoin_image.png";


const TrendingItem = ({ crypto }) => {
  return (
    <div className="flex flex-wrap ml:w-[45%] ml:rounded-xl lg:w-[30%] group hover:bg-darkBlue transition-all shadow-xl  gap-5 items-center p-4 w-full bg-white my-10">
      <div className="w-[40%] ml:w-auto order-1 ml:group-hover:scale-125 transition-all">
        <img src={crypto.item.small} className="w-[40px] h-[40px]" alt="the symbol of crypto" />
      </div>
      <div className="flex order-3 ml:order-2 w-[100%] ml:w-auto ml:flex-col justify-between group-hover:text-white transition-all">
        <div className="font-bold font-openSans text-[18px]">{crypto.item.name}</div>
        <div className="text-[15px]">{crypto.item.symbol}</div>
      </div>
      <div className="flex w-[40%] justify-end ml:w-auto order-2 ml:order-3 ml-auto gap-2 items-center group-hover:text-white transition-all">
        <img className="w-[20px] h-[20px]" src={bitCoinImage} alt="bitcoin icon" />
        <div>{crypto.item.price_btc.toFixed(7)}</div>
      </div>
    </div>
  );
};

export default TrendingItem;
