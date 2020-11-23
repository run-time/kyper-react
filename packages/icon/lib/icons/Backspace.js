import React from 'react'
import { createSvgIcon } from './base'

export const Backspace = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M14.5 2A1.5 1.5 0 0116 3.5v9a1.5 1.5 0 01-1.5 1.5h-9a.5.5 0 01-.37-.164l-5-5.5a.5.5 0 010-.672l5-5.5A.5.5 0 015.5 2h9zm0 1H5.721L1.176 8l4.545 5H14.5a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zM7.854 6.146L9 7.293l1.146-1.147a.5.5 0 01.708.708L9.707 8l1.147 1.146a.5.5 0 01-.708.708L9 8.707 7.854 9.854a.5.5 0 01-.708-.708L8.293 8 7.146 6.854a.5.5 0 11.708-.708z"
    fill={color}
    fillRule="evenodd"
  />
))

Backspace.displayName = 'Backspace'
