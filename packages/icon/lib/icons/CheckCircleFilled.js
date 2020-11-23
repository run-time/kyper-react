import React from 'react'
import { createSvgIcon } from './base'

export const CheckCircleFilled = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm4.358 5.151a.5.5 0 00-.707-.01L6.858 9.803 4.35 7.363a.5.5 0 10-.698.718l2.858 2.777a.5.5 0 00.697 0l5.142-5a.5.5 0 00.01-.707z"
    fill={color}
    fillRule="evenodd"
  />
))

CheckCircleFilled.displayName = 'CheckCircleFilled'
