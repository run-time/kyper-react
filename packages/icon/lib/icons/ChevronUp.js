import React from 'react'
import { createSvgIcon } from './base'

export const ChevronUp = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M3.854 10.867a.536.536 0 01-.708 0 .426.426 0 010-.643l4.5-4.09a.536.536 0 01.708 0l4.5 4.09a.426.426 0 010 .643.536.536 0 01-.708 0L8 7.097l-4.146 3.77z"
    fill={color}
    fillRule="evenodd"
  />
))

ChevronUp.displayName = 'ChevronUp'
