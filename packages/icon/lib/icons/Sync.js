import React from 'react'
import { createSvgIcon } from './base'

export const Sync = createSvgIcon(({ color }) => (
  <React.Fragment>
    <path
      clipRule="evenodd"
      d="M2.067 15.5a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5h4.266a.5.5 0 010 1H2.067v3.5z"
      fill={color}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M14.933 8.5a.5.5 0 011 0c0 4.15-3.573 7.5-7.966 7.5-2.902 0-5.455-1.648-6.842-4.266a.5.5 0 11.883-.468C3.228 13.566 5.448 15 7.967 15c3.854 0 6.966-2.918 6.966-6.5zM13.867 4V.5a.5.5 0 011 0v4a.5.5 0 01-.5.5H10.1a.5.5 0 110-1h3.767z"
      fill={color}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M1 7.5a.5.5 0 01-1 0C0 3.35 3.574 0 7.967 0c2.901 0 5.454 1.648 6.842 4.266a.5.5 0 01-.884.468C12.705 2.434 10.485 1 7.967 1 4.112 1 1 3.918 1 7.5z"
      fill={color}
      fillRule="evenodd"
    />
  </React.Fragment>
))

Sync.displayName = 'Sync'
