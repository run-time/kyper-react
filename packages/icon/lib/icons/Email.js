import React from 'react'
import { createSvgIcon } from './base'

export const Email = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M16 6.5v8a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-8a.5.5 0 01.735-.441L8 9.933l7.265-3.874A.5.5 0 0116 6.5zm-1 .833l-6.765 3.608a.5.5 0 01-.47 0L1 7.333V14.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V7.333zM10.5 6a.5.5 0 010 1h-5a.5.5 0 010-1h5zm3-6a.5.5 0 01.5.5V5a.5.5 0 01-1 0V1H3v4a.5.5 0 01-1 0V.5a.5.5 0 01.5-.5h11zm-3 3a.5.5 0 010 1h-5a.5.5 0 010-1h5z"
    fill={color}
    fillRule="evenodd"
  />
))

Email.displayName = 'Email'
