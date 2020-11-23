import React from 'react'
import { createSvgIcon } from './base'

export const Accounts = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M15.5 15a.5.5 0 010 1H.5a.5.5 0 010-1h15zM8.186.036l7.5 3A.5.5 0 0116 3.5v3a.5.5 0 01-.5.5H13v6.5a.5.5 0 01-1 0V7h-2v6.5a.5.5 0 01-1 0V7H7v6.5a.5.5 0 01-1 0V7H4v6.5a.5.5 0 01-1 0V7H.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.314-.464l7.5-3a.5.5 0 01.372 0zM8 1.039l-7 2.8V6h14V3.839l-7-2.8zM8 3a1 1 0 110 2 1 1 0 010-2z"
    fill={color}
    fillRule="evenodd"
  />
))

Accounts.displayName = 'Accounts'
