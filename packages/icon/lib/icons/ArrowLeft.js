import React from 'react'
import { createSvgIcon } from './base'

export const ArrowLeft = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M5.854 3.133a.426.426 0 010 .643L1.757 7.5h13.774c.26 0 .469.224.469.5s-.21.5-.469.5H1.757l4.097 3.724a.426.426 0 010 .643.536.536 0 01-.708 0l-5-4.546a.426.426 0 010-.642l5-4.546a.536.536 0 01.708 0z"
    fill={color}
    fillRule="evenodd"
  />
))

ArrowLeft.displayName = 'ArrowLeft'
