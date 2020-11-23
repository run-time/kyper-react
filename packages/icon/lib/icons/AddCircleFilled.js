import React from 'react'
import { createSvgIcon } from './base'

export const AddCircleFilled = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 2.542a.48.48 0 00-.48.48V7.52H3.022a.48.48 0 100 .96H7.52v4.498a.48.48 0 10.96 0V8.48h4.498a.48.48 0 100-.96H8.48V3.022a.48.48 0 00-.48-.48z"
    fill={color}
    fillRule="evenodd"
  />
))

AddCircleFilled.displayName = 'AddCircleFilled'
