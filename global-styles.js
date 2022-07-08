import { css } from '@emotion/react'
import "focus-visible/dist/focus-visible"

import { mediaStyle } from './src/contexts/responsive'

const flexFullHeight = css`
flex: 1;
display: flex;
flex-direction: column;
`


export default css`
  html {
    height: 100%;
  }
  body {
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  #___gatsby {
    ${flexFullHeight}
    > #gatsby-focus-wrapper {
      ${flexFullHeight}
      > main {
        ${flexFullHeight}
        > div:not(.fresnel-container) {
          flex: 1;
        }
      }
    }
  }

  ::-moz-selection {
    color: white;
    background: #222;
  }

  ::selection {
    color: white;
    background: #222;
  }
  ${mediaStyle}
`;
