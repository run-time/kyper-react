import React from 'react'
import { createSvgIcon } from './base'

export const Appliances = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M13.5 0A1.5 1.5 0 0115 1.5v13a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 011 14.5v-13A1.5 1.5 0 012.5 0h11zm.5 6H2v8.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V6zM4.5 8a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zm9-7h-11a.5.5 0 00-.5.5V5h12V1.5a.5.5 0 00-.5-.5z"
    fill={color}
    fillRule="evenodd"
  />
))

Appliances.displayName = 'Appliances'
