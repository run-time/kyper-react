import React from 'react'
import { createSvgIcon } from './base'

export const AttentionOutline = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 1.067a6.933 6.933 0 100 13.866A6.933 6.933 0 008 1.067zM8 11a1 1 0 110 2 1 1 0 010-2zm.02-8c.398 0 .72.364.72.813v4.874c0 .45-.322.813-.72.813-.398 0-.72-.364-.72-.813V3.814c0-.45.322-.813.72-.813z"
    fill={color}
    fillRule="evenodd"
  />
))

AttentionOutline.displayName = 'AttentionOutline'
