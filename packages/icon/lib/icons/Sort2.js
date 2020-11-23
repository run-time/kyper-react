import React from 'react'
import { createSvgIcon } from './base'

export const Sort2 = createSvgIcon(({ color }) => (
  <path
    d="M3.146 4.867a.536.536 0 00.708 0L8 1.097l4.146 3.77a.536.536 0 00.708 0 .426.426 0 000-.643l-4.5-4.09a.536.536 0 00-.708 0l-4.5 4.09a.426.426 0 000 .643zM12.854 11.133a.536.536 0 00-.708 0L8 14.903l-4.146-3.77a.536.536 0 00-.708 0 .426.426 0 000 .643l4.5 4.09a.536.536 0 00.708 0l4.5-4.09a.426.426 0 000-.643z"
    fill={color}
  />
))

Sort2.displayName = 'Sort2'
