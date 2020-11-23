import React from 'react'
import { createSvgIcon } from './base'

export const Lock = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0a4 4 0 014 4v2h1.5A1.5 1.5 0 0115 7.5v7a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 011 14.5v-7A1.5 1.5 0 012.5 6H4V4a4 4 0 014-4zm5.5 7h-11a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zM8 9a2 2 0 110 4 2 2 0 010-4zm0 1a1 1 0 100 2 1 1 0 000-2zm0-9a3 3 0 00-3 3v2h6V4a3 3 0 00-3-3z"
    fill={color}
    fillRule="evenodd"
  />
))

Lock.displayName = 'Lock'
