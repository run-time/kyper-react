import React from 'react'
import { createSvgIcon } from './base'

export const Search = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M6.933 0A6.933 6.933 0 0112.2 11.444l3.645 3.645a.533.533 0 11-.755.755l-3.645-3.645A6.933 6.933 0 116.934 0zm0 1.067a5.867 5.867 0 100 11.733 5.867 5.867 0 000-11.733z"
    fill={color}
    fillRule="evenodd"
  />
))

Search.displayName = 'Search'
