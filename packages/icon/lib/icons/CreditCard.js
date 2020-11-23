import React from 'react'
import { createSvgIcon } from './base'

export const CreditCard = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M14.5 2A1.5 1.5 0 0116 3.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5v-9A1.5 1.5 0 011.5 2h13zm.5 5H1v5.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V7zm-8.5 3a.5.5 0 010 1h-3a.5.5 0 010-1h3zm6 0a.5.5 0 010 1h-1a.5.5 0 010-1h1zm2-7h-13a.5.5 0 00-.5.5V6h14V3.5a.5.5 0 00-.5-.5z"
    fill={color}
    fillRule="evenodd"
  />
))

CreditCard.displayName = 'CreditCard'
