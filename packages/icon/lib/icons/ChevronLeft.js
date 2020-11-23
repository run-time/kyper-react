import React from 'react'
import { createSvgIcon } from './base'

export const ChevronLeft = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M10.367 12.146a.536.536 0 010 .708.426.426 0 01-.643 0l-4.09-4.5a.536.536 0 010-.708l4.09-4.5a.426.426 0 01.643 0 .536.536 0 010 .708L6.597 8l3.77 4.146z"
    fill={color}
    fillRule="evenodd"
  />
))

ChevronLeft.displayName = 'ChevronLeft'
