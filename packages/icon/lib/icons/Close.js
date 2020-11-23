import React from 'react'
import { createSvgIcon } from './base'

export const Close = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M11.86 4.14a.48.48 0 010 .68L8.678 8l3.18 3.18a.48.48 0 11-.678.68L8 8.678l-3.18 3.18a.48.48 0 11-.68-.678L7.322 8l-3.18-3.18a.48.48 0 01.678-.68L8 7.322l3.18-3.18a.48.48 0 01.68 0z"
    fill={color}
    fillRule="evenodd"
  />
))

Close.displayName = 'Close'
