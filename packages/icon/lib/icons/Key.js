import React from 'react'
import { createSvgIcon } from './base'

export const Key = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M15.5 0a.5.5 0 01.5.5v3a.5.5 0 01-.146.354l-1 1A.5.5 0 0114.5 5H12v2.5a.5.5 0 01-.146.354L9.849 9.858c.1.394.151.766.151 1.142a5 5 0 11-5-5c.376 0 .748.052 1.142.15L12.146.147A.5.5 0 0112.5 0h3zM15 1h-2.293L6.644 7.064a.5.5 0 01-.497.125A3.956 3.956 0 005 7a4 4 0 104 4c0-.36-.064-.727-.189-1.147a.5.5 0 01.125-.497L11 7.293V4.5a.5.5 0 01.5-.5h2.793L15 3.293V1zM5 9a2 2 0 110 4 2 2 0 010-4zm0 1a1 1 0 100 2 1 1 0 000-2z"
    fill={color}
    fillRule="evenodd"
  />
))

Key.displayName = 'Key'
