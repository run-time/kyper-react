import React from 'react'
import { createSvgIcon } from './base'

export const Widget = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M14.5 0A1.5 1.5 0 0116 1.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-13A1.5 1.5 0 011.5 0h13zm.5 5H1v9.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V5zm-.5-4h-13a.5.5 0 00-.5.5V4h14V1.5a.5.5 0 00-.5-.5zm-10 1a.5.5 0 010 1h-2a.5.5 0 010-1h2z"
    fill={color}
    fillRule="evenodd"
  />
))

Widget.displayName = 'Widget'
