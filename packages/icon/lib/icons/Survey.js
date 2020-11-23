import React from 'react'
import { createSvgIcon } from './base'

export const Survey = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      clipRule="evenodd"
      d="M0 .5A.5.5 0 01.5 0h6a.5.5 0 01.5.5v6a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-6zM1 1v5h5V1H1z"
      fill={color}
      fillRule="evenodd"
    />
    <path
      d="M9 3.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zM9.5 12a.5.5 0 000 1h6a.5.5 0 000-1h-6zM6.854 9.146a.5.5 0 010 .708L4.207 12.5l2.647 2.646a.5.5 0 01-.708.708L3.5 13.207.854 15.854a.5.5 0 01-.708-.708L2.793 12.5.146 9.854a.5.5 0 11.708-.708L3.5 11.793l2.646-2.647a.5.5 0 01.708 0z"
      fill={color}
    />
  </React.Fragment>
))

Survey.displayName = 'Survey'
