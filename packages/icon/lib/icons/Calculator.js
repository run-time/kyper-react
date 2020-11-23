import React from 'react'
import { createSvgIcon } from './base'

export const Calculator = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      clipRule="evenodd"
      d="M2.5 1a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-11zM1 1.5A1.5 1.5 0 012.5 0h11A1.5 1.5 0 0115 1.5v13a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 011 14.5v-13z"
      fill={color}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M3 2.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-3zM4 3v2h8V3H4zM3 7.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-2zM4 8v1h3V8H4zM3 11.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-2zm1 .5v1h3v-1H4zM9 7.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-6zm1 .5v5h2V8h-2z"
      fill={color}
      fillRule="evenodd"
    />
  </React.Fragment>
))

Calculator.displayName = 'Calculator'
