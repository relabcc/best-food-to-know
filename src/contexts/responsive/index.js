import { createMedia } from "@artsy/fresnel"
import isArray from "lodash/isArray";
import isNil from "lodash/isNil";
import mapValues from "lodash/mapValues";

import breakpoints from './breakpoints'

const AppMedia = createMedia({
  breakpoints: {
    base: 0,
    ...mapValues(breakpoints, d => d.replace(/\D+/g, '') * 1),
  }
})
export const mediaStyle = AppMedia.createMediaStyle()
export const { Media, MediaContextProvider } = AppMedia

const handleCalc = (syn, a) => isNil(a) ? null : [syn[0], a, syn[1]].join('')

export const responsiveCalc = (syn, resArr) => {
  return isArray(resArr) ? resArr.map(a => handleCalc(syn, a)) : handleCalc(syn, resArr)
}

const mobileOffset = 2

export const responsive = (...args) => {
  const argsLen = args.length
  if (argsLen <= 1) return args[0]
  return [...Array(mobileOffset).fill(args[0]), ...args]
};

export const mobileOrDesktop = responsive
