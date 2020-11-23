import React from 'react'
import { createSvgIcon } from './base'

export const Wallet = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M11.5 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0V1H2.5a1.5 1.5 0 100 3h13a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-13A2.5 2.5 0 010 13.5v-11A2.5 2.5 0 012.5 0h9zM1 4.5v9A1.5 1.5 0 002.5 15H15V5H2.5A2.489 2.489 0 011 4.5zM11 8a2 2 0 110 4 2 2 0 010-4zm0 1a1 1 0 100 2 1 1 0 000-2z"
    fill={color}
    fillRule="evenodd"
  />
))

Wallet.displayName = 'Wallet'
