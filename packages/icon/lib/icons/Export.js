import React from 'react'
import { createSvgIcon } from './base'

export const Export = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      d="M1.875 1.438a.438.438 0 00-.875 0v12.25C1 14.412 1.588 15 2.313 15h12.25a.438.438 0 000-.875H2.313a.438.438 0 01-.438-.438V1.438z"
      fill={color}
    />
    <path
      d="M14.872 1.128A.436.436 0 0115 1.43v6.133a.438.438 0 01-.875 0V2.495L7.872 8.747a.438.438 0 01-.619-.619l6.253-6.253H8.437a.438.438 0 010-.875h6.125a.437.437 0 01.31.128z"
      fill={color}
    />
  </React.Fragment>
))

Export.displayName = 'Export'
