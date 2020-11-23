import React from 'react'
import { createSvgIcon } from './base'

export const Spinner = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path d="M6 15.746A8 8 0 008 16v-2a6 6 0 116-6h2a8 8 0 10-10 7.746z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0h16v16H0V0z" fill="#fff" />
      </clipPath>
    </defs>
  </React.Fragment>
))

Spinner.displayName = 'Spinner'
