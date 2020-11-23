import React from 'react'
import { createSvgIcon } from './base'

export const Dollar = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M14.5 2A1.5 1.5 0 0116 3.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5v-9A1.5 1.5 0 011.5 2h13zM1 10.947V12.5a.5.5 0 00.5.5h1.553a2.67 2.67 0 00-2.052-2.053zm14 0A2.67 2.67 0 0012.947 13H14.5a.5.5 0 00.5-.5v-1.553zM12.043 3H3.957A3.558 3.558 0 011 5.957v4.086A3.558 3.558 0 013.957 13h8.086A3.559 3.559 0 0115 10.043V5.957A3.558 3.558 0 0112.043 3zM8 5a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 100 4 2 2 0 000-4zm6.5-3h-1.553A2.67 2.67 0 0015 5.054V3.5a.5.5 0 00-.5-.5zM3.053 3H1.5a.5.5 0 00-.5.5v1.553a2.67 2.67 0 002.053-2.052z"
    fill={color}
    fillRule="evenodd"
  />
))

Dollar.displayName = 'Dollar'
