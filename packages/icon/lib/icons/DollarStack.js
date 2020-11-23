import React from 'react'
import { createSvgIcon } from './base'

export const DollarStack = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M14.5 4A1.5 1.5 0 0116 5.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-9A1.5 1.5 0 011.5 4h13zM1 12.947V14.5a.5.5 0 00.5.5h1.553a2.67 2.67 0 00-2.052-2.053zm14 0A2.67 2.67 0 0012.947 15H14.5a.5.5 0 00.5-.5v-1.553zM12.043 5H3.957A3.558 3.558 0 011 7.957v4.086A3.558 3.558 0 013.957 15h8.086A3.559 3.559 0 0115 12.043V7.957A3.558 3.558 0 0112.043 5zM8 7a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 100 4 2 2 0 000-4zm6.5-3h-1.553A2.67 2.67 0 0015 7.054V5.5a.5.5 0 00-.5-.5zM3.053 5H1.5a.5.5 0 00-.5.5v1.553a2.67 2.67 0 002.053-2.052zM13.5 2a.5.5 0 010 1h-11a.5.5 0 010-1h11zm-2-2a.5.5 0 010 1h-7a.5.5 0 010-1h7z"
    fill={color}
    fillRule="evenodd"
  />
))

DollarStack.displayName = 'DollarStack'
