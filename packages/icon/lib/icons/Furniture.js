import React from 'react'
import { createSvgIcon } from './base'

export const Furniture = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M14 7a2 2 0 012 2v4.5a.5.5 0 01-.5.5H14v1.5a.5.5 0 01-1 0V14H3v1.5a.5.5 0 01-1 0V14H.5a.5.5 0 01-.5-.5V9a2 2 0 114 0v1h8V9a2 2 0 012-2zm0 1a1 1 0 00-1 1v1.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V9a1 1 0 10-2 0v4h14V9a1 1 0 00-1-1zm-1.5-8A1.5 1.5 0 0114 1.5v4a.5.5 0 01-1 0v-4a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v4a.5.5 0 01-1 0v-4A1.5 1.5 0 013.5 0h9z"
    fill={color}
    fillRule="evenodd"
  />
))

Furniture.displayName = 'Furniture'
