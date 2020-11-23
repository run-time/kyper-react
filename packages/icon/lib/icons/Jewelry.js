import React from 'react'
import { createSvgIcon } from './base'

export const Jewelry = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M8 4a6 6 0 110 12A6 6 0 018 4zm0 1a5 5 0 100 10A5 5 0 008 5zm1.5-5a.5.5 0 01.354.146l1 1a.5.5 0 010 .708l-1 1a.5.5 0 11-.708-.708l.647-.646-.5-.5H6.707l-.5.5.647.646a.5.5 0 11-.708.708l-1-1a.5.5 0 010-.708l1-1A.5.5 0 016.5 0h3z"
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

Jewelry.displayName = 'Jewelry'
