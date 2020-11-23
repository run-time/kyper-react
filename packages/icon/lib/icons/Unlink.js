import React from 'react'
import { createSvgIcon } from './base'

export const Unlink = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      d="M8.674 1.67a4 4 0 015.657 5.656L12.358 9.35a.5.5 0 11-.716-.698l1.98-2.03A3 3 0 109.378 2.38l-.005.004L7.35 4.358a.5.5 0 11-.698-.716L8.674 1.67zM4.35 6.642a.5.5 0 01.008.707l-1.98 2.03a3 3 0 104.243 4.242l.005-.004 2.025-1.975a.5.5 0 11.698.716L7.326 14.33A4 4 0 011.67 8.674L3.642 6.65a.5.5 0 01.707-.009z"
      fill={color}
    />
    <path
      d="M11.354 5.354a.5.5 0 00-.708-.708l-6 6a.5.5 0 00.708.708l6-6zM1.146 1.146a.5.5 0 01.708 0l2.5 2.5a.5.5 0 11-.708.708l-2.5-2.5a.5.5 0 010-.708zM12.354 11.646a.5.5 0 00-.708.708l2.5 2.5a.5.5 0 00.708-.708l-2.5-2.5z"
      fill={color}
    />
  </React.Fragment>
))

Unlink.displayName = 'Unlink'
