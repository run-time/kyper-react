import React from 'react'
import { createSvgIcon } from './base'

export const Check = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M2.5 6a.5.5 0 010 1H1v8h14V7h-3.5a.5.5 0 010-1h4a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-9A.5.5 0 01.5 6h2zm10 5a.5.5 0 010 1h-9a.5.5 0 010-1h9zM10.854.146l2 2a.5.5 0 010 .708l-5 5a.5.5 0 01-.196.12l-3 1a.5.5 0 01-.632-.632l1-3a.5.5 0 01.12-.196l5-5a.5.5 0 01.708 0zM10.5 1.207L5.937 5.77l-.646 1.94 1.939-.647L11.793 2.5 10.5 1.207z"
    fill={color}
    fillRule="evenodd"
  />
))

Check.displayName = 'Check'
