import React from 'react'
import { createSvgIcon } from './base'

export const Subtract = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 1.067a6.933 6.933 0 100 13.866A6.933 6.933 0 008 1.067zm4.267 6.4a.533.533 0 010 1.066H3.733a.533.533 0 010-1.066h8.534z"
    fill={color}
    fillRule="evenodd"
  />
))

Subtract.displayName = 'Subtract'
