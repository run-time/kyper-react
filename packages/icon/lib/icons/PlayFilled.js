import React from 'react'
import { createSvgIcon } from './base'

export const PlayFilled = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zM6.21 4.57c-.308-.186-.71.023-.71.368v6.125c0 .346.402.555.71.37l5.076-3.063a.426.426 0 000-.738L6.21 4.569zm.213 1.165l3.756 2.266-3.756 2.265v-4.53z"
    fill={color}
    fillRule="evenodd"
  />
))

PlayFilled.displayName = 'PlayFilled'
