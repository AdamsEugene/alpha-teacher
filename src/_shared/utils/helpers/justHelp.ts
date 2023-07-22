/* eslint-disable @typescript-eslint/no-explicit-any */
export function flattenObject(obj: any) {
  return flatten(Object.keys(obj).map((k) => [toNumber(k), obj[k]]))
}

// Substitute your own favorite flattening algorithm.
const flatten = (a: any): any =>
  Array.isArray(a) ? [].concat(...a.map(flatten)) : a

// Convert to number, if you can.
const toNumber = (n: any) => (isNaN(+n) ? n : +n)
