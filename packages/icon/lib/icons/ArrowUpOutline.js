import React from 'react'
import { createSvgIcon } from './base'

export const ArrowUpOutline = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      d="M11.38 6.658a.407.407 0 00.513 0 .282.282 0 000-.441L8.258 3.092a.407.407 0 00-.514 0L4.107 6.217a.282.282 0 000 .441.407.407 0 00.514 0L7.6 4.098v8.609c0 .162.18.293.4.293.22 0 .4-.131.4-.293V4.098l2.98 2.56z"
      fill={color}
    />
    <path
      clipRule="evenodd"
      d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1 0A7 7 0 111 8a7 7 0 0114 0z"
      fill={color}
      fillRule="evenodd"
    />
  </React.Fragment>
))

ArrowUpOutline.displayName = 'ArrowUpOutline'
