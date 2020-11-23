import React from 'react'
import { createSvgIcon } from './base'

export const Copy = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M11.5 3a.5.5 0 01.5.5v12a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5h10zM11 4H2v11h9V4zm3.5-4a.5.5 0 01.5.5v13a.5.5 0 01-1 0V1H3.5a.5.5 0 010-1h11zm-6 12a.5.5 0 010 1h-4a.5.5 0 010-1h4zm0-3a.5.5 0 010 1h-4a.5.5 0 010-1h4zm0-3a.5.5 0 010 1h-4a.5.5 0 010-1h4z"
    fill={color}
    fillRule="evenodd"
  />
))

Copy.displayName = 'Copy'
