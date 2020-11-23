import React from 'react'
import { createSvgIcon } from './base'

export const ArrowLeftFilled = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 16A8 8 0 108 0a8 8 0 000 16zM6.658 4.62a.407.407 0 000-.513.282.282 0 00-.441 0L3.092 7.743a.407.407 0 000 .514l3.125 3.636c.122.143.32.143.441 0a.407.407 0 000-.514L4.098 8.4h8.609c.162 0 .293-.18.293-.4 0-.22-.131-.4-.293-.4H4.098l2.56-2.98z"
    fill={color}
    fillRule="evenodd"
  />
))

ArrowLeftFilled.displayName = 'ArrowLeftFilled'
