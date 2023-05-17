import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const pageData = createContext(null);

const ContextData = ({children}) => {
  const [cryptos, setCryptos] = useState([]);
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en";
  // .emv
  console.log(cryptos)
  useEffect(() => {
    axios.get(url).then((response) => {
      setCryptos(response.data);
    })
  }, [url])

  return (
    <pageData.Provider value={{}}>
        {children}
    </pageData.Provider>
  )
}

export function useContextData() {
  return useContext(pageData);
}

export default ContextData;
