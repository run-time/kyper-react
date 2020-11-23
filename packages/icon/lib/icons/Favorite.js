import React from 'react'
import { createSvgIcon } from './base'

export const Favorite = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M8 .367a.5.5 0 01.448.279l2.202 4.46 4.922.715a.5.5 0 01.277.853l-3.562 3.472.84 4.902a.5.5 0 01-.725.528L8 13.26l-4.402 2.315a.5.5 0 01-.726-.527l.84-4.903L.152 6.674a.5.5 0 01.277-.853l4.922-.715L7.552.646A.5.5 0 018 .367zm0 1.63L6.13 5.784a.5.5 0 01-.376.274l-4.18.607L4.6 9.613a.5.5 0 01.144.443l-.714 4.163 3.738-1.966a.5.5 0 01.466 0l3.738 1.966-.714-4.163a.5.5 0 01.144-.443l3.024-2.948-4.179-.607a.5.5 0 01-.376-.274L8 1.997z"
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

Favorite.displayName = 'Favorite'
