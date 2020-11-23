import React from 'react'
import { createSvgIcon } from './base'

export const CheckmarkCircleOutline = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 1.067a6.933 6.933 0 100 13.866A6.933 6.933 0 008 1.067zm4.358 4.084a.5.5 0 01-.01.708l-5.142 5a.5.5 0 01-.697 0L3.65 8.08a.5.5 0 01.698-.717l2.508 2.439 4.795-4.662a.5.5 0 01.707.01z"
    fill={color}
    fillRule="evenodd"
  />
))

CheckmarkCircleOutline.displayName = 'CheckmarkCircleOutline'
