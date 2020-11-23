import React from 'react'
import { createSvgIcon } from './base'

export const Clock = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 1.067a6.933 6.933 0 100 13.866A6.933 6.933 0 008 1.067zm0 10.666c.295 0 .533.24.533.534v1.066a.533.533 0 11-1.066 0v-1.066c0-.295.238-.534.533-.534zm-2.823-7.31l3.044 3.044h5.112a.533.533 0 110 1.066H8a.533.533 0 01-.377-.156l-3.2-3.2a.533.533 0 11.754-.754zM3.733 7.467a.533.533 0 110 1.066H2.667a.533.533 0 110-1.066h1.066zM8 2.133c.295 0 .533.24.533.534v1.066a.533.533 0 11-1.066 0V2.667c0-.295.238-.534.533-.534z"
    fill={color}
    fillRule="evenodd"
  />
))

Clock.displayName = 'Clock'
