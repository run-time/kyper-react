import React from 'react'
import { createSvgIcon } from './base'

export const ArrowDown = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M3.133 10.146a.426.426 0 01.643 0L7.5 14.243V.469C7.5.209 7.724 0 8 0s.5.21.5.469v13.774l3.724-4.097a.426.426 0 01.643 0 .536.536 0 010 .708l-4.546 5a.426.426 0 01-.642 0l-4.546-5a.536.536 0 010-.708z"
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

ArrowDown.displayName = 'ArrowDown'
