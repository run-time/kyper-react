import React from 'react'
import { createSvgIcon } from './base'

export const Lock2 = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M14 0a1.5 1.5 0 011.5 1.5v11A1.5 1.5 0 0114 14h-.5v1.5a.5.5 0 01-1 0V14h-9v1.5a.5.5 0 01-1 0V14H2a1.5 1.5 0 01-1.5-1.5v-11A1.5 1.5 0 012 0h12zm0 1H2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-11A.5.5 0 0014 1zM8 4a2.5 2.5 0 01.5 4.95v1.55a.5.5 0 01-1 0V8.95A2.5 2.5 0 018 4zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
    fill={color}
    fillRule="evenodd"
  />
))

Lock2.displayName = 'Lock2'
