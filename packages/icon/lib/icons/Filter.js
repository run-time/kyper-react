import React from 'react'
import { createSvgIcon } from './base'

export const Filter = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M1.5 1.933l5.4 6.72c.066.081.1.18.1.28v5.134h2V8.933c0-.1.036-.199.1-.28l5.4-6.72h-13zM6 9.09L.1 1.747C-.145 1.439.09 1 .5 1h15c.413 0 .648.439.4.747L10 9.089v5.444c0 .258-.223.467-.5.467h-3c-.275 0-.5-.209-.5-.467V9.09z"
        fill={color}
        fillRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0h16v16H0V0z" fill="#fff" />
      </clipPath>
    </defs>
  </React.Fragment>
))

Filter.displayName = 'Filter'
