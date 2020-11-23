import React from 'react'
import { createSvgIcon } from './base'

export const Docs = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      d="M1 1.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-7zM2 2v6h12V2H2z"
      fill={color}
    />
    <path
      d="M1 11.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM1.5 14a.5.5 0 000 1H8a.5.5 0 000-1H1.5z"
      fill={color}
    />
  </React.Fragment>
))

Docs.displayName = 'Docs'
