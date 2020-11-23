import React from 'react'
import { createSvgIcon } from './base'

export const ArrowRightFilled = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm1.342-4.62a.407.407 0 000 .513c.122.143.32.143.441 0l3.126-3.636a.407.407 0 000-.514L9.783 4.107a.282.282 0 00-.441 0 .407.407 0 000 .514l2.56 2.979H3.293C3.131 7.6 3 7.78 3 8c0 .22.131.4.293.4h8.609l-2.56 2.98z"
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

ArrowRightFilled.displayName = 'ArrowRightFilled'
