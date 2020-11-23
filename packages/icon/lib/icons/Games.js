import React from 'react'
import { createSvgIcon } from './base'

export const Games = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M11.5 6a4.5 4.5 0 110 9h-7a4.5 4.5 0 110-9h7zm0 1h-7a3.5 3.5 0 100 7h7a3.5 3.5 0 100-7zm-7 1a.5.5 0 01.5.5V10h1.5a.5.5 0 010 1H5v1.5a.5.5 0 01-1 0V11H2.5a.5.5 0 010-1H4V8.5a.5.5 0 01.5-.5zm6.5 3v1h-1v-1h1zm2 0v1h-1v-1h1zm-1-2v1h-1V9h1zM8.5 1a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3a.5.5 0 01.5-.5z"
    fill={color}
    fillRule="evenodd"
  />
))

Games.displayName = 'Games'
