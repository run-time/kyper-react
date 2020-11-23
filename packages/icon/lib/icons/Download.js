import React from 'react'
import { createSvgIcon } from './base'

export const Download = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#clip0)">
      <path
        clipRule="evenodd"
        d="M8.35 15.894l-.045.029a.595.595 0 01-.221.072.653.653 0 01-.062.005H8l-.03-.001-.03-.002a.653.653 0 01-.16-.036l-.038-.015a.591.591 0 01-.126-.075l-.018-.016-4.551-3.959a.45.45 0 010-.7.63.63 0 01.804 0l3.58 3.114V7.588c0-.274.255-.495.569-.495.314 0 .569.221.569.495v6.72l3.58-3.111a.63.63 0 01.804 0 .45.45 0 010 .7l-4.55 3.958-.02.016-.017.013-.01.007-.005.003zm-.432.1a.68.68 0 00.06.006H8l-.082-.005zM15.467 0A.53.53 0 0116 .528V4.75a.53.53 0 01-.533.527H.533A.53.53 0 010 4.751V.528A.53.53 0 01.533 0h14.934zm-.534 1.056H1.067v3.167h13.866V1.056z"
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

Download.displayName = 'Download'
