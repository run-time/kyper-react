import React from 'react'
import { createSvgIcon } from './base'

export const Add = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M13.458 8a.48.48 0 01-.48.48H8.48v4.498a.48.48 0 11-.96 0V8.48H3.022a.48.48 0 110-.96H7.52V3.022a.48.48 0 01.96 0V7.52h4.498a.48.48 0 01.48.48z"
    fill={color}
    fillRule="evenodd"
  />
))

Add.displayName = 'Add'
