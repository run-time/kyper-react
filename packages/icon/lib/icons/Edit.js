import React from 'react'
import { createSvgIcon } from './base'

export const Edit = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M12.644.156l3.2 3.2a.533.533 0 010 .754L5.177 14.777a.534.534 0 01-.247.14L.663 15.984a.533.533 0 01-.647-.647l1.067-4.267a.534.534 0 01.14-.248L11.89.156a.533.533 0 01.754 0zM10.133 3.42l-8.051 8.052-.815 3.261 3.26-.815 8.052-8.052-2.446-2.446zm2.134-2.132l-1.38 1.378 2.446 2.446 1.38-1.379-2.446-2.445z"
    fill={color}
    fillRule="evenodd"
  />
))

Edit.displayName = 'Edit'
