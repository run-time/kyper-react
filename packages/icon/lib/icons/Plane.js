import React from 'react'
import { createSvgIcon } from './base'

export const Plane = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M15.223.776a2.65 2.65 0 010 3.747l-2.605 2.605 3.056 4.584c.513.767.411 1.79-.242 2.442l-1.696 1.697a.508.508 0 01-.782-.077l-3.592-5.389-1.12 1.12-.116.088-2.451 1.327.161 2.158a.637.637 0 01-1.086.5l-1.389-1.403-1.852 1.005c-.444.24-.93-.245-.689-.69l1.004-1.852L.423 11.25a.637.637 0 01.5-1.086l2.155.16 1.33-2.45.086-.117 1.119-1.119L.226 3.046a.508.508 0 01-.077-.782L1.845.568A1.935 1.935 0 014.288.325L8.87 3.38 11.476.776a2.65 2.65 0 013.747 0zm-3.337 7.085l-1.792 1.791 3.361 5.043 1.26-1.26a.919.919 0 00.114-1.16l-2.943-4.414zm.308-6.367L9.305 4.383a.102.102 0 01-.01.012l-2.51 2.508-.007.01a.518.518 0 01-.015.014L5.265 8.424 2.53 13.47l5.048-2.736 1.507-1.509a.494.494 0 01.007-.006l5.414-5.415a1.634 1.634 0 00-2.31-2.31zm-9.63-.208L1.305 2.545l5.041 3.36 1.792-1.792-4.414-2.942a.919.919 0 00-1.16.115z"
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

Plane.displayName = 'Plane'
