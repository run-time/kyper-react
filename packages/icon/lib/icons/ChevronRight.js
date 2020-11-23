import React from 'react'
import { createSvgIcon } from './base'

export const ChevronRight = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M5.633 3.854a.536.536 0 010-.708.426.426 0 01.643 0l4.09 4.5a.536.536 0 010 .708l-4.09 4.5a.426.426 0 01-.643 0 .536.536 0 010-.708L9.403 8l-3.77-4.146z"
    fill={color}
    fillRule="evenodd"
  />
))

ChevronRight.displayName = 'ChevronRight'
