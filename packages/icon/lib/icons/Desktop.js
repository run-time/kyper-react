import React from 'react'
import { createSvgIcon } from './base'

export const Desktop = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M15.5 11a.5.5 0 01.5.5 2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 010 11.5a.5.5 0 01.5-.5h15zm-.585 1H1.085A1.5 1.5 0 002.5 13h11a1.5 1.5 0 001.415-1zM13.5 2A1.5 1.5 0 0115 3.5v6a.5.5 0 01-1 0v-6a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v6a.5.5 0 01-1 0v-6A1.5 1.5 0 012.5 2h11z"
    fill={color}
    fillRule="evenodd"
  />
))

Desktop.displayName = 'Desktop'
