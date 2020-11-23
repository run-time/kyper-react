import React from 'react'
import { createSvgIcon } from './base'

export const ArrowUp = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M12.867 5.854a.426.426 0 01-.643 0L8.5 1.757v13.774c0 .26-.224.469-.5.469s-.5-.21-.5-.469V1.757L3.776 5.854a.426.426 0 01-.643 0 .536.536 0 010-.708l4.546-5a.426.426 0 01.642 0l4.546 5a.536.536 0 010 .708z"
    fill={color}
    fillRule="evenodd"
  />
))

ArrowUp.displayName = 'ArrowUp'
