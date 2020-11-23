import React from 'react'
import { createSvgIcon } from './base'

export const HelpOutline = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M8 16A8 8 0 118 0a8 8 0 010 16zm0-1.067A6.933 6.933 0 108 1.067a6.933 6.933 0 000 13.866zM8 5a1 1 0 110-2 1 1 0 010 2zm-.02 8c-.398 0-.72-.364-.72-.813V7.314c0-.45.322-.813.72-.813.398 0 .72.364.72.813v4.875c0 .448-.322.812-.72.812z"
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

HelpOutline.displayName = 'HelpOutline'
