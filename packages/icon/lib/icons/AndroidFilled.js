import React from 'react'
import { createSvgIcon } from './base'

export const AndroidFilled = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        d="M11.235.573l-.812.812a3.517 3.517 0 011.576 2.951c0 .184-.15.333-.333.333H4.334a.333.333 0 01-.333-.333 3.517 3.517 0 011.576-2.951L4.765.572a.333.333 0 01.472-.47l.946.946a4.561 4.561 0 013.635 0l.946-.946.008-.008a.333.333 0 01.463.479zM1.335 6.336a1 1 0 112 0V11a1 1 0 01-2 0V6.336zM12.666 6.336a1 1 0 112 0V11a1 1 0 01-2 0V6.336zM11.666 5.336H4.334a.333.333 0 00-.333.333v5.332c0 .792.557 1.475 1.333 1.633V15a1 1 0 102 0v-2.333h1.333V15a1 1 0 102 0v-2.366a1.666 1.666 0 001.332-1.633V5.67a.333.333 0 00-.333-.333z"
        fill={color}
      />
      <g>
        <path
          d="M6.334 3.336a.333.333 0 100-.666.333.333 0 000 .666zM9.666 3.336a.333.333 0 100-.666.333.333 0 000 .666z"
          fill={color}
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0h16v16H0V0z" fill="#fff" />
      </clipPath>
    </defs>
  </React.Fragment>
))

AndroidFilled.displayName = 'AndroidFilled'
