import React from 'react'
import { createSvgIcon } from './base'

export const PointerOutline = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      clipRule="evenodd"
      d="M5 1a1 1 0 00-1 1v8.5a.5.5 0 01-1 0V8.086A1.5 1.5 0 002 9.5v1.757a2.5 2.5 0 00.732 1.768L4.707 15h7.433l1.713-5.138a2.5 2.5 0 00-2.096-3.275l-5.312-.59A.5.5 0 016 5.5V2a1 1 0 00-1-1zM3 7.05V2a2 2 0 114 0v3.052l4.867.541a3.5 3.5 0 012.934 4.585l-1.827 5.48A.5.5 0 0112.5 16h-8a.5.5 0 01-.354-.146l-2.12-2.121A3.5 3.5 0 011 11.257V9.5a2.5 2.5 0 012-2.45z"
      fill={color}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M7.5 8a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5zM10.5 8a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5z"
      fill={color}
      fillRule="evenodd"
    />
  </React.Fragment>
))

PointerOutline.displayName = 'PointerOutline'
