import React from 'react'
import { createSvgIcon } from './base'

export const Shoe = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M1.55 3a.5.5 0 01.49.4 2 2 0 003.92 0 .5.5 0 01.49-.4H7.5a.5.5 0 01.3.1L11.667 6H13.5A2.5 2.5 0 0116 8.5v3a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 11.5v-8A.5.5 0 01.5 3h1.05zm-.38 1H1v7.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-3A1.5 1.5 0 0013.5 7h-2a.5.5 0 01-.3-.1L7.333 4H6.83a3 3 0 01-5.66 0zm12.33 6a.5.5 0 010 1h-11a.5.5 0 010-1h11z"
    fill={color}
    fillRule="evenodd"
  />
))

Shoe.displayName = 'Shoe'
