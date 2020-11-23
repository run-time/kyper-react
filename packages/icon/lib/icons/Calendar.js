import React from 'react'
import { createSvgIcon } from './base'

export const Calendar = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M11.5 0a.5.5 0 01.5.5V2h2.5A1.5 1.5 0 0116 3.5v11a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-11A1.5 1.5 0 011.5 2H4V.5a.5.5 0 011 0V2h6V.5a.5.5 0 01.5-.5zM15 6H1v8.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V6zm-4.5 1a.5.5 0 01.5.5V10h2.5a.5.5 0 010 1H11v2.5a.5.5 0 01-1 0V11H6v2.5a.5.5 0 01-1 0V11H2.5a.5.5 0 010-1H5V7.5a.5.5 0 011 0V10h4V7.5a.5.5 0 01.5-.5zm4-4h-13a.5.5 0 00-.5.5V5h14V3.5a.5.5 0 00-.5-.5z"
    fill={color}
    fillRule="evenodd"
  />
))

Calendar.displayName = 'Calendar'
