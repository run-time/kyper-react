import React from 'react'
import { createSvgIcon } from './base'

export const Payment = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M13.5 3a.5.5 0 01.5.5v11a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 14.5v-11a.5.5 0 011 0v11a.5.5 0 00.5.5H10V3.5a.5.5 0 011 0V15h1.5a.5.5 0 00.5-.5v-11a.5.5 0 01.5-.5zm-8 8a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5zm0-8a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3a.5.5 0 01.5-.5zm10-3a.5.5 0 010 1H.5a.5.5 0 010-1h15z"
    fill={color}
    fillRule="evenodd"
  />
))

Payment.displayName = 'Payment'
