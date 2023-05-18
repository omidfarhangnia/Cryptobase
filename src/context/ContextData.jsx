import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

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
