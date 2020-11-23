import React from 'react'
import { createSvgIcon } from './base'

export const Visit = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M5.621 6.015l8 2c.486.121.512.801.037.96l-2.232.744 3.428 3.427a.5.5 0 010 .708l-2 2a.5.5 0 01-.708 0L8.72 12.426l-.745 2.232c-.158.475-.838.449-.96-.037l-2-8a.5.5 0 01.607-.606zm.566 1.172l1.382 5.526.457-1.371a.5.5 0 01.828-.196l3.646 3.647 1.293-1.293-3.647-3.646a.5.5 0 01.196-.828l1.371-.457-5.526-1.382zM14.5 0A1.5 1.5 0 0116 1.5v5a.5.5 0 01-1 0v-5a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h2a.5.5 0 010 1h-2A1.5 1.5 0 010 8.5v-7A1.5 1.5 0 011.5 0h13z"
    fill={color}
    fillRule="evenodd"
  />
))

Visit.displayName = 'Visit'
