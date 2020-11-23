import React from 'react'
import { createSvgIcon } from './base'

export const RowsMedium = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M15.53 13.5c.26 0 .47.224.47.5s-.21.5-.47.5H.47c-.26 0-.47-.224-.47-.5s.21-.5.47-.5h15.06zm0-4c.26 0 .47.224.47.5s-.21.5-.47.5H.47c-.26 0-.47-.224-.47-.5s.21-.5.47-.5h15.06zm0-4c.26 0 .47.224.47.5s-.21.5-.47.5H.47C.21 6.5 0 6.276 0 6s.21-.5.47-.5h15.06zm0-4c.26 0 .47.224.47.5s-.21.5-.47.5H.47C.21 2.5 0 2.276 0 2s.21-.5.47-.5h15.06z"
    fill={color}
    fillRule="evenodd"
  />
))

RowsMedium.displayName = 'RowsMedium'
