import React from 'react'
import { createSvgIcon } from './base'

export const PauseOutline = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 1.067a6.933 6.933 0 100 13.866A6.933 6.933 0 008 1.067zM5.75 4.5c.276 0 .5.209.5.467v6.066c0 .258-.224.467-.5.467s-.5-.209-.5-.467V4.967c0-.258.224-.467.5-.467zm4.5 0c.276 0 .5.209.5.467v6.066c0 .258-.224.467-.5.467s-.5-.209-.5-.467V4.967c0-.258.224-.467.5-.467z"
    fill={color}
    fillRule="evenodd"
  />
))

PauseOutline.displayName = 'PauseOutline'
