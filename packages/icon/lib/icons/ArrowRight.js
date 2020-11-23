import React from 'react'
import { createSvgIcon } from './base'

export const ArrowRight = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M10.146 12.867a.426.426 0 010-.643L14.243 8.5H.469C.209 8.5 0 8.276 0 8s.21-.5.469-.5h13.774l-4.097-3.724a.426.426 0 010-.643.536.536 0 01.708 0l5 4.546a.426.426 0 010 .642l-5 4.546a.536.536 0 01-.708 0z"
    fill={color}
    fillRule="evenodd"
  />
))

ArrowRight.displayName = 'ArrowRight'
