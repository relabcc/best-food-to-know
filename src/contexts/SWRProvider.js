import React from 'react'
import { SWRConfig } from 'swr';

const SWRProvider = ({ children }) => (
  <SWRConfig
    value={{
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}
  >
    {children}
  </SWRConfig>
)

export default SWRProvider
