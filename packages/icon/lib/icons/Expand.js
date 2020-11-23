import React from 'react'
import { createSvgIcon } from './base'

export const Expand = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M15.5 10.5a.5.5 0 01.5.5v3.5a1.5 1.5 0 01-1.5 1.5H11a.5.5 0 010-1h3.5a.5.5 0 00.5-.5V11a.5.5 0 01.5-.5zm-15 0a.5.5 0 01.5.5v3.5a.5.5 0 00.5.5H5a.5.5 0 010 1H1.5A1.5 1.5 0 010 14.5V11a.5.5 0 01.5-.5zm11-4.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h7zM11 7H5v2h6V7zM5 0a.5.5 0 010 1H1.5a.5.5 0 00-.5.5V5a.5.5 0 01-1 0V1.5A1.5 1.5 0 011.5 0H5zm9.5 0A1.5 1.5 0 0116 1.5V5a.5.5 0 01-1 0V1.5a.5.5 0 00-.5-.5H11a.5.5 0 010-1h3.5z"
    fill={color}
    fillRule="evenodd"
  />
))

Expand.displayName = 'Expand'
