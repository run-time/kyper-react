import React from 'react'
import { createSvgIcon } from './base'

export const Code = createSvgIcon(({ color }) => (
  <path
    d="M10.033 1.32l-5 13a.5.5 0 10.934.36l5-13a.5.5 0 00-.934-.36zM3.854 4.854a.5.5 0 10-.708-.707l-3 3a.5.5 0 000 .707l3 3a.5.5 0 10.708-.707L1.207 7.5l2.647-2.646zM12.146 10.854a.5.5 0 010-.707L14.793 7.5l-2.647-2.646a.5.5 0 01.708-.707l3 3a.5.5 0 010 .707l-3 3a.5.5 0 01-.708 0z"
    fill={color}
  />
))

Code.displayName = 'Code'
