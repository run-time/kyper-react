import React from 'react'
import { createSvgIcon } from './base'

export const Budgets = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M11.5 9a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-7-10a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm9 1a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
    fill={color}
    fillRule="evenodd"
  />
))

Budgets.displayName = 'Budgets'
