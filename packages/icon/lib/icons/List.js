import React from 'react'
import { createSvgIcon } from './base'

export const List = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M2 12a2 2 0 110 4 2 2 0 010-4zm0 1a1 1 0 100 2 1 1 0 000-2zm13.5 1a.5.5 0 010 1h-9a.5.5 0 010-1h9zM2 6a2 2 0 110 4 2 2 0 010-4zm0 1a1 1 0 100 2 1 1 0 000-2zm13.5 1a.5.5 0 010 1h-9a.5.5 0 010-1h9zM2 0a2 2 0 110 4 2 2 0 010-4zm0 1a1 1 0 100 2 1 1 0 000-2zm13.5 1a.5.5 0 010 1h-9a.5.5 0 010-1h9z"
    fill={color}
    fillRule="evenodd"
  />
))

List.displayName = 'List'
