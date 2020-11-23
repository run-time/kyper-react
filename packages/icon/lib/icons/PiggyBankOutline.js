import React from 'react'
import { createSvgIcon } from './base'

export const PiggyBankOutline = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      clipRule="evenodd"
      d="M6.667 7.333h4v1.334h-4V7.333zM8.667 1.333a.667.667 0 100 1.334.667.667 0 000-1.334zm-2 .667a2 2 0 114 0 2 2 0 01-4 0zM7.333 13.333V16H6v-2.667h1.333zM11.333 13.333V16H10v-2.667h1.333z"
      fill={color}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M6.414 4.667H11a5 5 0 110 10H6.333A4.998 4.998 0 011.911 12H0V7.333h1.915c.312-.59.737-1.11 1.249-1.532L2.516 3.58l.598-.209.22.63-.22-.63h.003l.004-.002.01-.003a1.512 1.512 0 01.113-.033 3.033 3.033 0 011.212-.063c.68.104 1.436.482 1.958 1.398zm-2.218-.089l.056.008c.352.054.814.25 1.134 1.007L5.558 6H11a3.667 3.667 0 110 7.333H6.333a3.667 3.667 0 01-3.384-2.256l-.171-.41H1.333v-2H2.78l.172-.41a3.688 3.688 0 011.351-1.643l.407-.272-.514-1.764z"
      fill={color}
      fillRule="evenodd"
    />
  </React.Fragment>
))

PiggyBankOutline.displayName = 'PiggyBankOutline'
