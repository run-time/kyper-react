import React from 'react'
import { createSvgIcon } from './base'

export const CloseFilled = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm3.86 4.14a.48.48 0 00-.68 0L8 7.322l-3.18-3.18a.48.48 0 00-.68.678L7.322 8l-3.18 3.18a.48.48 0 10.678.68L8 8.678l3.18 3.18a.48.48 0 10.68-.678L8.678 8l3.18-3.18a.48.48 0 000-.68z"
    fill={color}
    fillRule="evenodd"
  />
))

CloseFilled.displayName = 'CloseFilled'
