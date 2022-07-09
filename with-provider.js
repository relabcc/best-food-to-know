import React from 'react'
import { Global } from '@emotion/react'

import { MediaContextProvider } from './src/contexts/responsive'
import globalStyles from './global-styles'

const Providers = ({ element }) => (
  <MediaContextProvider>
    <>
      <Global styles={globalStyles} />
      {element}
    </>
  </MediaContextProvider>
)

export default Providers
