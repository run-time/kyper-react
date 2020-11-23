import React from 'react'
import { createSvgIcon } from './base'

export const ArrowRightOutline = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      d="M9.342 11.38a.407.407 0 000 .513c.122.143.32.143.441 0l3.126-3.636a.407.407 0 000-.514L9.783 4.107a.282.282 0 00-.441 0 .407.407 0 000 .514l2.56 2.979H3.293C3.131 7.6 3 7.78 3 8c0 .22.131.4.293.4h8.609l-2.56 2.98z"
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

ArrowRightOutline.displayName = 'ArrowRightOutline'
