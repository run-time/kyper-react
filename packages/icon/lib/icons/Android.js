import React from 'react'
import { createSvgIcon } from './base'

export const Android = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M3.854.146l1.478 1.478C6.136 1.224 7.042 1 8 1c.958 0 1.864.225 2.668.624L12.146.146a.5.5 0 01.708.708L11.547 2.16A5.992 5.992 0 0114 7v6.5a.5.5 0 01-.5.5H12v1.5a.5.5 0 01-1 0V14H5v1.5a.5.5 0 01-1 0V14H2.5a.5.5 0 01-.5-.5V7c0-1.987.966-3.748 2.453-4.84L3.146.854a.5.5 0 11.708-.708zM13 8H3v5h10V8zM.5 7a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4A.5.5 0 01.5 7zm15 0a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5zM8 2a5 5 0 00-5 5h10a5 5 0 00-5-5zM6 4a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2z"
    fill={color}
    fillRule="evenodd"
  />
))

Android.displayName = 'Android'
