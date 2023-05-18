import React, { createContext, useContext } from 'react';

const pageData = createContext(null);

const ContextData = ({cryptos, children}) => {
  return (
    <pageData.Provider value={{cryptos}}>
        {children}
    </pageData.Provider>
  )
}

export function useContextData() {
  return useContext(pageData);
}

export default ContextData;
