import React from 'react'
import { createSvgIcon } from './base'

export const UserMulti = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M5.5 9a5.5 5.5 0 015.5 5.5.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5A5.5 5.5 0 015.5 9zm0 1a4.5 4.5 0 00-4.473 4h8.946A4.5 4.5 0 005.5 10zm7-2a3.5 3.5 0 013.5 3.5v1a.5.5 0 01-.5.5h-3a.5.5 0 010-1H15v-.5a2.5 2.5 0 00-3.882-2.084.5.5 0 01-.554-.832A3.485 3.485 0 0112.5 8zm-7-7a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm7 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
    fill={color}
    fillRule="evenodd"
  />
))

UserMulti.displayName = 'UserMulti'
