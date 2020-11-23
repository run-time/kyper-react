import React from 'react'
import { createSvgIcon } from './base'

export const Target = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 1a7 7 0 100 14A7 7 0 008 1zm0 2a5 5 0 110 10A5 5 0 018 3zm0 1a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4zm0 1a1 1 0 100 2 1 1 0 000-2z"
    fill={color}
    fillRule="evenodd"
  />
))

Target.displayName = 'Target'
