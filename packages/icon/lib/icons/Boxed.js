import React from 'react'
import { createSvgIcon } from './base'

export const Boxed = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M16 1.5A1.5 1.5 0 0014.5 0h-13A1.5 1.5 0 000 1.5v13A1.5 1.5 0 001.5 16h13a1.5 1.5 0 001.5-1.5v-13zM1.5 1h13a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5zm10.36 3.82a.48.48 0 10-.68-.68L8 7.322l-3.18-3.18a.48.48 0 00-.68.678L7.322 8l-3.18 3.18a.48.48 0 10.678.68L8 8.678l3.18 3.18a.48.48 0 10.68-.678L8.678 8l3.18-3.18z"
    fill={color}
    fillRule="evenodd"
  />
))

Boxed.displayName = 'Boxed'
