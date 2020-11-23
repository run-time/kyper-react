import React from 'react'
import { createSvgIcon } from './base'

export const Lightning = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M8.311 2.353L2.494 9h5.069c.27 0 .475.278.431.582l-.65 4.46 6.162-7.041H7.563c-.299 0-.51-.334-.415-.658l1.163-3.99zM7.046 10H1.438c-.39 0-.585-.538-.309-.853L9.003.149c.326-.373.87.011.724.512L8.17 6h6.393c.39 0 .585.539.309.853l-7.874 8.998c-.3.344-.81.044-.74-.436L7.046 10z"
        fill={color}
        fillRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0h16v16H0V0z" fill="#fff" />
      </clipPath>
    </defs>
  </React.Fragment>
))

Lightning.displayName = 'Lightning'
