import React from 'react'
import { createSvgIcon } from './base'

export const Building = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M6.5 16h-6a.5.5 0 01-.5-.5v-7A.5.5 0 01.5 8H3V.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5V8h2.5a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-9zM15 9h-2v6h2V9zM3 9H1v6h2V9zm9-8H4v14h2v-2.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V15h2V1zM9 13H7v2h2v-2zm.5-4a.5.5 0 010 1h-3a.5.5 0 010-1h3zm0-3a.5.5 0 010 1h-3a.5.5 0 010-1h3zm0-3a.5.5 0 010 1h-3a.5.5 0 010-1h3z"
    fill={color}
    fillRule="evenodd"
  />
))

Building.displayName = 'Building'
