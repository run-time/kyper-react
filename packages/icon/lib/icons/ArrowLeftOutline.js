import React from 'react'
import { createSvgIcon } from './base'

export const ArrowLeftOutline = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      d="M6.658 4.62a.407.407 0 000-.513.282.282 0 00-.441 0L3.092 7.743a.407.407 0 000 .514l3.125 3.636c.122.143.32.143.441 0a.407.407 0 000-.514L4.098 8.4h8.609c.162 0 .293-.18.293-.4 0-.22-.131-.4-.293-.4H4.098l2.56-2.98z"
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

ArrowLeftOutline.displayName = 'ArrowLeftOutline'
