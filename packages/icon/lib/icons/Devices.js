import React from 'react'
import { createSvgIcon } from './base'

export const Devices = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M10.5 0A1.5 1.5 0 0112 1.5V6h2.5A1.5 1.5 0 0116 7.5v7a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 018 14.5v-7A1.5 1.5 0 019.5 6H11V1.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h4a.5.5 0 010 1h-4A1.5 1.5 0 010 13.5v-12A1.5 1.5 0 011.5 0h9zm4 7h-5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5z"
    fill={color}
    fillRule="evenodd"
  />
))

Devices.displayName = 'Devices'
