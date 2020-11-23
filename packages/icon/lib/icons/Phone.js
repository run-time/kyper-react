import React from 'react'
import { createSvgIcon } from './base'

export const Phone = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M10.133 11.512l1.757-1.756a.533.533 0 01.754 0l3.2 3.2a.533.533 0 010 .755l-2.133 2.133c-.1.1-.236.156-.378.156C5.97 16 0 10.03 0 2.667c0-.142.056-.277.156-.377L2.29.156a.533.533 0 01.754 0l3.2 3.2a.533.533 0 010 .754L4.488 5.867l5.645 5.645zm.378 1.132a.533.533 0 01-.755 0l-6.4-6.4a.533.533 0 010-.754l1.756-1.757-2.445-2.445-1.598 1.598c.115 6.6 5.445 11.93 12.045 12.045l1.598-1.598-2.445-2.445-1.756 1.756z"
    fill={color}
    fillRule="evenodd"
  />
))

Phone.displayName = 'Phone'
