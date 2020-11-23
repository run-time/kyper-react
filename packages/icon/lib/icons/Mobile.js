import React from 'react'
import { createSvgIcon } from './base'

export const Mobile = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M12.5 0A1.5 1.5 0 0114 1.5v13a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 14.5v-13A1.5 1.5 0 013.5 0h9zm0 1h-9a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5zM8 11a1 1 0 110 2 1 1 0 010-2z"
    fill={color}
    fillRule="evenodd"
  />
))

Mobile.displayName = 'Mobile'
