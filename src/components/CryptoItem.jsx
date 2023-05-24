import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { usePageData } from "../context/ContextData";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export function CryptoItem({ crypto }) {
  const [isSaved, setIsSaved] = useState(false);
  const {userData, userDoc} = usePageData();

  function addToFavorite() {
    updateDoc(doc(db, "users", `${userData?.email}`), {
      favorites: arrayUnion(crypto.name)
    })
  }

  function removeFromFavorite() {
    const favorites = [...userDoc?.favorites]
    const itemIndex = favorites.indexOf(crypto.name);
    const slicedArray = favorites.splice(itemIndex, 1);
    updateDoc(doc(db, "users", `${userData?.email}`), {
      favorites: favorites
    })
  }

  useEffect(() => {
    if(!userData) {
      setIsSaved(false)
    }
    if(userDoc?.favorites?.includes(crypto.name)){
      setIsSaved(true)
    }
  }, [userData, userDoc])

  return (
    <tr className="text-center hover:bg-platinum transition-colors">
      <td className="py-2 pl-4" onClick={() => setIsSaved(!isSaved)}>
        {isSaved ? <AiFillStar onClick={removeFromFavorite} size={20} fill="#F2A900" /> : <AiOutlineStar onClick={addToFavorite} size={20} fill="#2F4920" />}
      </td>
      <td className="py-2">{crypto.market_cap_rank}</td>
      <td className="py-2">
        <Link to={`/crypto/${crypto.id}`}>
          <div className="flex ml-3 items-center gap-2">
            <img
              className="w-[30px]"
              src={crypto.image}
              alt={`this is the symbol of ${crypto.name}`}
            />
            <span>{crypto.name}</span>
          </div>
        </Link>
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
