import React from 'react'
import { createSvgIcon } from './base'

export const ThumbsDown = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M.5 0a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-3zM1 8V1h2v7H1zm4.342 1.026a.5.5 0 01.632.316l1.873 5.618.13-.037A1.5 1.5 0 009 13.5v-4a.5.5 0 01.5-.5h4.008a1.5 1.5 0 001.467-1.826l-1.111-5A1.5 1.5 0 0012.4 1H5.5a.5.5 0 010-1h6.9a2.5 2.5 0 012.44 1.958l1.111 5A2.5 2.5 0 0113.507 10H10v3.5A2.5 2.5 0 017.5 16a.5.5 0 01-.474-.342l-2-6a.5.5 0 01.316-.632z"
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

ThumbsDown.displayName = 'ThumbsDown'
