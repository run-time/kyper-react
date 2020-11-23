import React from 'react'
import { createSvgIcon } from './base'

export const Spending = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 11.733a3.717 3.717 0 01-2.235-.742l-2.276 2.275a6.934 6.934 0 0011.424-4.732h-3.218A3.734 3.734 0 018 11.734zM7.466 1.087A6.934 6.934 0 002.734 12.51l2.275-2.276a3.734 3.734 0 012.457-5.93V1.087zM8 5.333a2.667 2.667 0 100 5.334 2.667 2.667 0 000-5.334zm.534-4.246v3.218a3.736 3.736 0 013.161 3.161h3.218a6.935 6.935 0 00-6.379-6.38z"
    fill={color}
    fillRule="evenodd"
  />
))

Spending.displayName = 'Spending'
