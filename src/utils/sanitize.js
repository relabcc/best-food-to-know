import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';
import mapValues from 'lodash/mapValues';
import xss from 'xss'

const sanitize = data => {
  if (isArray(data)) return data.map(sanitize)
  if (isObject(data)) return mapValues(data, sanitize)
  return xss(data)
}

export default sanitize
