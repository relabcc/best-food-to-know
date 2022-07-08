const bp = [0, 30, 48.125, 62, 80, 96].map(em => em * 16);

const chakraBpNames = ['sm', 'md', 'lg', 'xl', '2xl']
const breakpoints = chakraBpNames.reduce((bps, name, i) => {
  bps[name] = `${bp[i + 1]}px`
  return bps
}, {})

export default breakpoints
