import React from 'react'
import { createSvgIcon } from './base'

export const Save = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      d="M3.5 2a.5.5 0 01.5.5V5h5V2.5a.5.5 0 011 0v3a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM3.5 9a.5.5 0 00-.5.5v4a.5.5 0 001 0V10h8v3.5a.5.5 0 001 0v-4a.5.5 0 00-.5-.5h-9z"
      fill={color}
    />
    <path
      clipRule="evenodd"
      d="M0 .5A.5.5 0 01.5 0h11a.5.5 0 01.354.146l4 4A.5.5 0 0116 4.5v11a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5V.5zM1 1v14h14V4.707L11.293 1H1z"
      fill={color}
      fillRule="evenodd"
    />
  </React.Fragment>
))

Save.displayName = 'Save'
