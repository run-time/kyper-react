import React from 'react'
import { createSvgIcon } from './base'

export const Checkmark = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M11.652 5.141a.5.5 0 11.697.718l-5.143 5a.5.5 0 01-.697 0L3.65 8.08a.5.5 0 01.698-.717l2.508 2.439 4.795-4.662z"
    fill={color}
    fillRule="evenodd"
  />
))

Checkmark.displayName = 'Checkmark'
