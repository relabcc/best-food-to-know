import map from 'lodash/map';
import get from 'lodash/get';
import isArray from 'lodash/isArray';

export default function arrToObj(arr, key) {
  const ar = isArray(arr) ? arr : map(arr)
  return ar.reduce((obj, a, i) => {
    obj[typeof key === 'undefined' ? i : get(a, key)] = {
      ...a,
      originalIndex: i,
    }
    return obj
  }, {})
}
