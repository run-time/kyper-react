import React from 'react'
import { createSvgIcon } from './base'

export const ArrowDownOutline = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      d="M4.62 9.342a.407.407 0 00-.513 0 .282.282 0 000 .441l3.636 3.126a.407.407 0 00.514 0l3.636-3.126a.282.282 0 000-.441.407.407 0 00-.514 0L8.4 11.902V3.293C8.4 3.131 8.22 3 8 3c-.22 0-.4.131-.4.293v8.609l-2.98-2.56z"
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

ArrowDownOutline.displayName = 'ArrowDownOutline'
