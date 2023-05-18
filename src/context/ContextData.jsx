import React, { createContext, useContext } from 'react';

const pageData = createContext(null);

const ContextData = ({cryptos, trendingCryptos,  children}) => {
  return (
    <pageData.Provider value={{cryptos, trendingCryptos}}>
        {children}
    </pageData.Provider>
  )
}

export function useContextData() {
  return useContext(pageData);
}

export default ContextData;
