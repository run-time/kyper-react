import React from 'react'
import { createSvgIcon } from './base'

export const AttentionFilled = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 11a1 1 0 100 2 1 1 0 000-2zm.02-8c-.398 0-.72.364-.72.813v4.874c0 .45.322.813.72.813.398 0 .72-.364.72-.813V3.814c0-.45-.322-.813-.72-.813z"
    fill={color}
    fillRule="evenodd"
  />
))

AttentionFilled.displayName = 'AttentionFilled'
