import React from 'react'
import { createSvgIcon } from './base'

export const AddSquare = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      clipRule="evenodd"
      d="M14.5 0A1.5 1.5 0 0116 1.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-13A1.5 1.5 0 011.5 0h13zm0 1h-13a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5z"
      fill={color}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M13.458 8a.48.48 0 01-.48.48H8.48v4.498a.48.48 0 11-.96 0V8.48H3.022a.48.48 0 110-.96H7.52V3.022a.48.48 0 01.96 0V7.52h4.498a.48.48 0 01.48.48z"
      fill={color}
      fillRule="evenodd"
    />
  </React.Fragment>
))

AddSquare.displayName = 'AddSquare'
