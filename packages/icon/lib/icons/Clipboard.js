import React from 'react'
import { createSvgIcon } from './base'

export const Clipboard = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M3.5 1a.5.5 0 010 1h-1a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-1a.5.5 0 010-1h1A1.5 1.5 0 0115 2.5v12a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 011 14.5v-12A1.5 1.5 0 012.5 1h1zm8 9a.5.5 0 010 1h-7a.5.5 0 010-1h7zm0-4a.5.5 0 010 1h-7a.5.5 0 010-1h7zm-1-6a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h5zM10 1H6v1h4V1z"
    fill={color}
    fillRule="evenodd"
  />
))

Clipboard.displayName = 'Clipboard'
