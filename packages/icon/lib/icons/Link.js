import React from 'react'
import { createSvgIcon } from './base'

export const Link = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M9.438 6.562a4.285 4.285 0 010 6.061l-2.122 2.123A4.285 4.285 0 111.26 8.679l1.865-1.81a.533.533 0 11.743.764L2.01 9.44a3.219 3.219 0 104.553 4.553l2.122-2.123a3.219 3.219 0 000-4.553.533.533 0 01.754-.754zm5.307-5.307a4.287 4.287 0 01-.005 6.067l-1.865 1.811a.533.533 0 01-.743-.765l1.859-1.806A3.219 3.219 0 109.438 2.01L7.316 4.132a3.219 3.219 0 000 4.553.533.533 0 01-.754.754 4.285 4.285 0 010-6.06l2.122-2.124a4.285 4.285 0 016.061 0z"
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

Link.displayName = 'Link'
