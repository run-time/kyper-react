import React from 'react'
import { createSvgIcon } from './base'

export const Copy2 = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M15.5 4a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-2a.5.5 0 011 0V15h10V5h-1.5a.5.5 0 010-1h2zm-4-4a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5V.5A.5.5 0 01.5 0h11zM11 1H1v10h10V1z"
    fill={color}
    fillRule="evenodd"
  />
))

Copy2.displayName = 'Copy2'
