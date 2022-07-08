import React, { useState } from 'react';

import Context from './context'

export const headerHeight = '2.5rem'

const Provider = ({ children }) => {
  const [hideHeader, setHideHeader] = useState()
  const [headerMode, setHeaderMode] = useState('solid')
  return (
    <Context.Provider
      value={{
        hideHeader,
        setHideHeader,
        headerHeight,
        headerMode,
        setHeaderMode,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider;
