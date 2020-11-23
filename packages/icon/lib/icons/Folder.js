import React from 'react'
import { createSvgIcon } from './base'

export const Folder = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M7.768 4H15.5a.5.5 0 01.5.5v8a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 010 12.5v-11A.5.5 0 01.5 1h5a.5.5 0 01.416.223L7.768 4zM15 5H7.5a.5.5 0 01-.416-.223L5.232 2H1v10.5A1.5 1.5 0 002.5 14h11a1.5 1.5 0 001.5-1.5V5z"
    fill={color}
    fillRule="evenodd"
  />
))

Folder.displayName = 'Folder'
