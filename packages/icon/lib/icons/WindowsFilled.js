import React from 'react'
import { createSvgIcon } from './base'

export const WindowsFilled = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        d="M16 7.229V.192l-7.802 1.12v5.917H16zM0 2.568l6.654-.955v5.616H0v-4.66zM0 13.432v-4.66h6.654v5.616L0 13.432zM16 15.808l-7.802-1.119V8.772H16v7.036z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0h16v16H0V0z" fill="#fff" />
      </clipPath>
    </defs>
  </React.Fragment>
))

WindowsFilled.displayName = 'WindowsFilled'
