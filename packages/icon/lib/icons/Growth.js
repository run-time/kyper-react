import React from 'react'
import { createSvgIcon } from './base'

export const Growth = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M3.5 11a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h3zm12-3a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h3zM8.372.166l4.5 5A.5.5 0 0112.5 6H10v9.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6H3.5a.5.5 0 01-.372-.834l4.5-5a.5.5 0 01.744 0zM3 12H1v3h2v-3zm12-3h-2v6h2V9zM8 1.247L4.623 5H6.5a.5.5 0 01.5.5V15h2V5.5a.5.5 0 01.5-.5h1.877L8 1.247z"
    fill={color}
    fillRule="evenodd"
  />
))

Growth.displayName = 'Growth'
