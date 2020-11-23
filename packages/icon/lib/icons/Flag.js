import React from 'react'
import { createSvgIcon } from './base'

export const Flag = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M2.5 0a.5.5 0 01.5.5V1h10.5a.5.5 0 01.447.724L12.06 5.5l1.888 3.776A.5.5 0 0113.5 10H3v5.5a.5.5 0 01-1 0V.5a.5.5 0 01.5-.5zM3 9h9.691l-1.638-3.276a.5.5 0 010-.448L12.69 2H3v7z"
    fill={color}
    fillRule="evenodd"
  />
))

Flag.displayName = 'Flag'
