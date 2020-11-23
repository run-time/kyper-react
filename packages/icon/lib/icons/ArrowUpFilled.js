import React from 'react'
import { createSvgIcon } from './base'

export const ArrowUpFilled = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.38-9.342a.407.407 0 00.513 0 .282.282 0 000-.441L8.258 3.092a.407.407 0 00-.514 0L4.107 6.217a.282.282 0 000 .441.407.407 0 00.514 0L7.6 4.098v8.609c0 .162.18.293.4.293.22 0 .4-.131.4-.293V4.098l2.98 2.56z"
        fill={color}
        fillRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0h16v16H0V0z" fill="#fff" />
      </clipPath>
    </defs>
  </React.Fragment>
))

ArrowUpFilled.displayName = 'ArrowUpFilled'
