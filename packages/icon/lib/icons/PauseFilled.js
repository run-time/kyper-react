import React from 'react'
import { createSvgIcon } from './base'

export const PauseFilled = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zM5.75 4.5c-.276 0-.5.209-.5.467v6.066c0 .258.224.467.5.467s.5-.209.5-.467V4.967c0-.258-.224-.467-.5-.467zm4.5 0c-.276 0-.5.209-.5.467v6.066c0 .258.224.467.5.467s.5-.209.5-.467V4.967c0-.258-.224-.467-.5-.467z"
    fill={color}
    fillRule="evenodd"
  />
))

PauseFilled.displayName = 'PauseFilled'
