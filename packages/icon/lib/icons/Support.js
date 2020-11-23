import React from 'react'
import { createSvgIcon } from './base'

export const Support = createSvgIcon(({ color }) => (
  <path
    d="M8 .5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-3.367L8.748 7.934A.5.5 0 018 7.5v-7zM9 1v5.638l2.752-1.572A.5.5 0 0112 5h3V1H9zM0 14.5A3.5 3.5 0 013.5 11h2A3.5 3.5 0 019 14.5v1a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-1zM3.5 12A2.5 2.5 0 001 14.5v.5h7v-.5A2.5 2.5 0 005.5 12h-2zM4.5 5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
    fill={color}
  />
))

Support.displayName = 'Support'
