import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { usePageData } from "../context/ContextData";
import { arrayRemove, arrayUnion, collection, doc, getDoc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export function CryptoItem({ crypto }) {
  const [isSaved, setIsSaved] = useState(false);
  const {userData} = usePageData();

  function handleAddCrypto() {
    if(userData) {
      updateDoc(doc(db, "users", `${userData?.email}`), {
        favorites: arrayUnion(crypto.name)
      })
    }else {
      alert("please sign in first")
    }
  }

  function handleRemoveCrypto() {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log(querySnapshot)
    });
    return () => unsubscribe();
  }

  return (
    <tr className="text-center hover:bg-platinum transition-colors">
      <td className="py-2 pl-4" onClick={() => setIsSaved(!isSaved)}>
        {isSaved ? <AiFillStar size={20} fill="#F2A900" onClick={handleRemoveCrypto}/> : <AiOutlineStar size={20} fill="#2F4920" onClick={handleAddCrypto}/>}
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
