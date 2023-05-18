import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

export function CryptoItem({ crypto }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <tr className="text-center hover:bg-platinum transition-colors cursor-pointer">
      <td className="py-2 pl-4" onClick={() => setIsSaved(!isSaved)}>
        {isSaved ? <AiFillStar size={20} /> : <AiOutlineStar size={20} />}
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
      <td className="py-2 uppercase">{crypto.symbol}</td>
      <td className="py-2">${crypto.current_price}</td>
      <td className="py-2">
        {crypto.price_change_24h > 0 ? (
          <span className="text-green-600">
            +{crypto.price_change_24h.toFixed(3)}%
          </span>
        ) : (
          <span className="text-red-600">
            {crypto.price_change_24h.toFixed(3)}%
          </span>
        )}
      </td>
      <td className="py-2">{crypto.total_volume.toLocaleString()}</td>
      <td className="py-2">${crypto.market_cap.toLocaleString()}</td>
      <td className="py-2">
        <Sparklines data={crypto.sparkline_in_7d.price}>
          <SparklinesLine color="black" />
        </Sparklines>
      </td>
    </tr>
  );
}

export default CryptoItem;
