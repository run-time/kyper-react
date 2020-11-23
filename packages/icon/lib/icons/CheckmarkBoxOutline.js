import React from 'react'
import { createSvgIcon } from './base'

export const CheckmarkBoxOutline = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      d="M12.358 5.151a.5.5 0 00-.707-.01L6.858 9.803 4.35 7.363a.5.5 0 10-.698.718l2.858 2.777a.5.5 0 00.697 0l5.142-5a.5.5 0 00.01-.707z"
      fill={color}
    />
    <path
      clipRule="evenodd"
      d="M16 1.5A1.5 1.5 0 0014.5 0h-13A1.5 1.5 0 000 1.5v13A1.5 1.5 0 001.5 16h13a1.5 1.5 0 001.5-1.5v-13zM1.5 1h13a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5z"
      fill={color}
      fillRule="evenodd"
    />
  </React.Fragment>
))

CheckmarkBoxOutline.displayName = 'CheckmarkBoxOutline'
