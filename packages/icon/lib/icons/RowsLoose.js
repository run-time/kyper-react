import React from 'react'
import { createSvgIcon } from './base'

export const RowsLoose = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M15.53 13.5c.26 0 .47.224.47.5s-.21.5-.47.5H.47c-.26 0-.47-.224-.47-.5s.21-.5.47-.5h15.06zm0-6c.26 0 .47.224.47.5s-.21.5-.47.5H.47C.21 8.5 0 8.276 0 8s.21-.5.47-.5h15.06zm0-6c.26 0 .47.224.47.5s-.21.5-.47.5H.47C.21 2.5 0 2.276 0 2s.21-.5.47-.5h15.06z"
    fill={color}
    fillRule="evenodd"
  />
))

RowsLoose.displayName = 'RowsLoose'
