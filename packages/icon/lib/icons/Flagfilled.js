import React from 'react'
import { createSvgIcon } from './base'

export const Flagfilled = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M2.5 0a.5.5 0 01.5.5V1h10.5a.5.5 0 01.447.724L12.06 5.5l1.888 3.776A.5.5 0 0113.5 10H3v5.5a.5.5 0 01-1 0V.5a.5.5 0 01.5-.5z"
    fill={color}
    fillRule="evenodd"
  />
))

Flagfilled.displayName = 'Flagfilled'
