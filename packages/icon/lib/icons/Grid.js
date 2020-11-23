import React from 'react'
import { createSvgIcon } from './base'

export const Grid = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M6.5 9a.5.5 0 01.5.5v6a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-6A.5.5 0 01.5 9h6zm9 0a.5.5 0 01.5.5v6a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5h6zM6 10H1v5h5v-5zm9 0h-5v5h5v-5zM6.5 0a.5.5 0 01.5.5v6a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-6A.5.5 0 01.5 0h6zm9 0a.5.5 0 01.5.5v6a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5h6zM6 1H1v5h5V1zm9 0h-5v5h5V1z"
    fill={color}
    fillRule="evenodd"
  />
))

Grid.displayName = 'Grid'
