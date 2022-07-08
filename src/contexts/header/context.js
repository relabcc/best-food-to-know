import { createContext } from 'react';

export default createContext({
  hideHeader: false,
  headerHeight: '',
  headerMode: 'solid',
  setHideHeader: () => {},
  setHeaderMode: () => {},
})
