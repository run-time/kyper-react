import React from 'react'
import { createSvgIcon } from './base'

export const Send = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M1.898 5.747l3.46 1.597a.516.516 0 01-.432.937L.3 6.147a.516.516 0 01.048-.957L15.315.03c.406-.141.796.249.656.655L10.81 15.652a.516.516 0 01-.957.048L6.757 8.99a.516.516 0 01.103-.58l3.097-3.097a.516.516 0 11.73.73L7.845 8.885l2.408 5.217L14.65 1.35 1.898 5.747z"
    fill={color}
    fillRule="evenodd"
  />
))

Send.displayName = 'Send'
