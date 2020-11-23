import React from 'react'
import { createSvgIcon } from './base'

export const Image = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M14.5 0A1.5 1.5 0 0116 1.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-13A1.5 1.5 0 011.5 0h13zm-2.959 7.249l-3.65 4.563a.5.5 0 01-.745.042L4.5 9.207 1 12.706V14.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-3.793l-3.459-3.458zM14.5 1h-13a.5.5 0 00-.5.5v9.792l3.146-3.146a.5.5 0 01.708 0l2.605 2.605 3.65-4.563a.5.5 0 01.745-.042L15 9.293V1.5a.5.5 0 00-.5-.5zm-8 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
    fill={color}
    fillRule="evenodd"
  />
))

Image.displayName = 'Image'
