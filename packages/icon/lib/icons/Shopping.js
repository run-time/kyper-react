import React from 'react'
import { createSvgIcon } from './base'

export const Shopping = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M5 12a2 2 0 110 4 2 2 0 010-4zm8 0a2 2 0 110 4 2 2 0 010-4zm-8 1a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2zM3.5 0a.5.5 0 01.497.445L4.947 9h8.192l1.667-5H6.5a.5.5 0 010-1h9a.5.5 0 01.474.658l-2 6A.5.5 0 0113.5 10h-9a.5.5 0 01-.497-.445L3.053 1H.5a.5.5 0 010-1h3z"
    fill={color}
    fillRule="evenodd"
  />
))

Shopping.displayName = 'Shopping'
