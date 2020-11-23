import React from 'react'
import { createSvgIcon } from './base'

export const Heart = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M1.317 2.317a4.5 4.5 0 016.364 0c.117.117.223.238.32.363.095-.124.2-.245.316-.362a4.5 4.5 0 016.364 6.364l-.004.004-6.328 6.172a.5.5 0 01-.698 0L1.317 8.682a4.5 4.5 0 010-6.365zm5.657.708a3.5 3.5 0 00-4.952 4.947L8 13.802l5.977-5.83a3.5 3.5 0 00-4.952-4.947c-.235.235-.42.51-.586.815a.5.5 0 01-.878 0 3.459 3.459 0 00-.587-.815z"
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

Heart.displayName = 'Heart'
