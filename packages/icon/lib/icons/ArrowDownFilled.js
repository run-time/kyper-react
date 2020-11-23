import React from 'react'
import { createSvgIcon } from './base'

export const ArrowDownFilled = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zM4.62 9.342a.407.407 0 00-.513 0 .282.282 0 000 .441l3.636 3.126a.407.407 0 00.514 0l3.636-3.126a.282.282 0 000-.441.407.407 0 00-.514 0L8.4 11.902V3.293C8.4 3.131 8.22 3 8 3c-.22 0-.4.131-.4.293v8.609l-2.98-2.56z"
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

ArrowDownFilled.displayName = 'ArrowDownFilled'
