import React from 'react'
import { createSvgIcon } from './base'

export const Tag = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M3.598.01l5 1a.5.5 0 01.256.136l7 7a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-7-7a.5.5 0 01-.136-.256l-1-5a.5.5 0 01.136-.452l3-3A.5.5 0 013.598.01zm.066 1.033L1.043 3.664l.918 4.59L8.5 14.793 14.793 8.5l-6.54-6.54-4.589-.917zM5 4a1 1 0 110 2 1 1 0 010-2z"
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

Tag.displayName = 'Tag'
