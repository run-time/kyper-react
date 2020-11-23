import React from 'react'
import { createSvgIcon } from './base'

export const AddCircleOutline = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 1.067a6.933 6.933 0 100 13.866A6.933 6.933 0 008 1.067zm0 1.475a.48.48 0 01.48.48V7.52h4.498a.48.48 0 110 .96H8.48v4.498a.48.48 0 11-.96 0V8.48H3.022a.48.48 0 110-.96H7.52V3.022a.48.48 0 01.48-.48z"
    fill={color}
    fillRule="evenodd"
  />
))

AddCircleOutline.displayName = 'AddCircleOutline'
