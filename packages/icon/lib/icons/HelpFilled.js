import React from 'react'
import { createSvgIcon } from './base'

export const HelpFilled = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM8 5a1 1 0 100-2 1 1 0 000 2zm-.02 8c.398 0 .72-.364.72-.813V7.314c0-.45-.322-.813-.72-.813-.398 0-.72.364-.72.813v4.875c0 .448.322.812.72.812z"
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

HelpFilled.displayName = 'HelpFilled'
