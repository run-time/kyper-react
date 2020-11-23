import React from 'react'
import { createSvgIcon } from './base'

export const PlayOutline = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 1.067a6.933 6.933 0 100 13.866A6.933 6.933 0 008 1.067zM6.21 4.569l5.076 3.063a.426.426 0 010 .738L6.21 11.433c-.307.185-.709-.024-.709-.37V4.938c0-.345.402-.554.71-.369zm.213 1.166v4.531l3.756-2.265-3.756-2.266z"
    fill={color}
    fillRule="evenodd"
  />
))

PlayOutline.displayName = 'PlayOutline'
