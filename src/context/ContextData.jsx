import React, { createContext } from 'react'

const Data = createContext(null);

const ContextData = ({children}) => {
  return (
    <Data.Provider value={null}>
        {children}
    </Data.Provider>
  )
}

export default ContextData
