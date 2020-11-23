import React from 'react'
import { createSvgIcon } from './base'

export const AutoLoan = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M12.779 1a1.5 1.5 0 011.423 1.026l1.772 5.316.011.038a.533.533 0 01.008.04l-.019-.078A.5.5 0 0116 7.5v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5l-.001-1.5H5v1.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V7.47a.497.497 0 01.006-.05L0 7.5a.501.501 0 01.026-.158l1.772-5.316A1.5 1.5 0 013.22 1h9.558zM4 13H1v1h3v-1zm10.999 0h-3v1h3v-1zm0-5H1v4h14V8zM3 9a1 1 0 110 2 1 1 0 010-2zm10 0a1 1 0 110 2 1 1 0 010-2zm-.221-7H3.22a.5.5 0 00-.475.342L1.193 7h13.613l-1.553-4.658A.5.5 0 0012.78 2z"
    fill={color}
    fillRule="evenodd"
  />
))

AutoLoan.displayName = 'AutoLoan'
