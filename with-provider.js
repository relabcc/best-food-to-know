import React from 'react'
import { Global } from '@emotion/react'

import { MediaContextProvider } from './src/contexts/responsive'
import globalStyles from './global-styles'
import SWRProvider from './src/contexts/SWRProvider'

const Providers = ({ element }) => (
  <MediaContextProvider>
    <SWRProvider>
      <>
        <Global styles={globalStyles} />
        {element}
      </>
    </SWRProvider>
  </MediaContextProvider>
)

export default Providers
