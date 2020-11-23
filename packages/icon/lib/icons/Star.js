import React from 'react'
import { createSvgIcon } from './base'

export const Star = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M8 .24a.5.5 0 01.477.35l1.621 5.179H15.5a.5.5 0 01.3.9l-4.298 3.23 1.692 5.207a.5.5 0 01-.77.559L8 12.45l-4.424 3.215a.5.5 0 01-.77-.56L4.498 9.9.2 6.67a.5.5 0 01.3-.9h5.402L7.522.591A.5.5 0 018 .24zm0 2.173L6.746 6.418a.5.5 0 01-.477.351H1.998l3.386 2.545a.5.5 0 01.176.554l-1.327 4.083 3.473-2.524a.5.5 0 01.588 0l3.473 2.524-1.326-4.083a.5.5 0 01.175-.554l3.386-2.545H9.732a.5.5 0 01-.477-.35L8 2.412z"
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

Star.displayName = 'Star'
