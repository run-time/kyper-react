import React from 'react'
import { createSvgIcon } from './base'

export const More = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 6a2 2 0 110 4 2 2 0 010-4zM2 6a2 2 0 110 4 2 2 0 010-4zm12 0a2 2 0 110 4 2 2 0 010-4z"
    fill={color}
    fillRule="evenodd"
  />
))

More.displayName = 'More'
