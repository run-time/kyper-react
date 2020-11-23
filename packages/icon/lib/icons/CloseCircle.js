import React from 'react'
import { createSvgIcon } from './base'

export const CloseCircle = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 1.067a6.933 6.933 0 100 13.866A6.933 6.933 0 008 1.067zm3.86 3.074a.48.48 0 010 .678L8.678 8l3.18 3.18a.48.48 0 11-.678.68L8 8.678l-3.18 3.18a.48.48 0 11-.68-.678L7.322 8l-3.18-3.18a.48.48 0 01.678-.68L8 7.322l3.18-3.18a.48.48 0 01.68 0z"
    fill={color}
    fillRule="evenodd"
  />
))

CloseCircle.displayName = 'CloseCircle'
