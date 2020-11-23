import React from 'react'
import { createSvgIcon } from './base'

export const Redo = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        d="M15.496 5c.278 0 .504.224.504.5v5c0 .276-.226.5-.504.5h-5.04a.502.502 0 01-.503-.5c0-.276.225-.5.504-.5h3.763c-1.676-2.439-4.585-4-7.669-4A9.073 9.073 0 00.822 8.022a.507.507 0 01-.709-.072.497.497 0 01.072-.704A10.086 10.086 0 016.551 5c3.384 0 6.571 1.69 8.442 4.351V5.5c0-.276.225-.5.503-.5z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0h16v16H0V0z" fill="#fff" />
      </clipPath>
    </defs>
  </React.Fragment>
))

Redo.displayName = 'Redo'
