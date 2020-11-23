import React from 'react'
import { createSvgIcon } from './base'

export const ThumbsUp = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M10 2.5V6h3.506a2.5 2.5 0 012.445 3.042l-1.11 5A2.5 2.5 0 0112.4 16H5.5a.5.5 0 010-1h6.9a1.5 1.5 0 001.464-1.175l1.11-5A1.5 1.5 0 0013.508 7H9.5a.5.5 0 01-.5-.5v-4a1.5 1.5 0 00-1.153-1.46L5.974 6.658a.5.5 0 11-.948-.316l2-6A.5.5 0 017.5 0 2.5 2.5 0 0110 2.5zM.5 7a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-3zm.5 8V8h2v7H1z"
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

ThumbsUp.displayName = 'ThumbsUp'
