import { theme, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"
import get from "lodash/get";
import breakpoints from "contexts/responsive/breakpoints";

const zh = 'Barlow, "Noto Sans TC", "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';
const en = `Barlow, ${zh}`;
const fonts = {
  heading: en,
  body: zh,
  mono: "Menlo, monospace",
  blog: 'Montserrat, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif'
}

const primary = 'blue'
const secondary = 'green'
const danger = 'red'

const overrides = {
  fonts,
  colors: {
    primary: get(theme.colors, `${primary}.500`),
    secondary: get(theme.colors, `${secondary}.500`),
    danger: get(theme.colors, `${danger}.500`),
    text: get(theme.colors, 'black'),
    black: {
      500: 'black',
    },
    custom: {
      gray: '#808080',
      textGray: '#666666',
      lightGray: '#999999',
      borderGray: '#cccccc',
      sliderGray: '#e6e6e6',
      bgGray: '#b3b3b3',
      filterBg: '#f2f2f2',
      titleBlue: '#0092d3',
    }
  },
  breakpoints: createBreakpoints(breakpoints),
  sizes: {
    header: '4em',
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'black',
      },
      baseStyle: {
        borderRadius: 'full',
        letterSpacing: '0.1em',
        pb: '0.125em',
      },
    },
    Container: {
      baseStyle: {
        maxW: 'container.lg',
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: '0.1em',
      },
    }
  },
}

const customTheme = extendTheme(overrides)

export default customTheme
