import React from 'react'
import { createSvgIcon } from './base'

export const UserAdd = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M9 10a.5.5 0 010 1H6a4.5 4.5 0 00-4.473 4H10a.5.5 0 010 1H1a.5.5 0 01-.5-.5A5.5 5.5 0 016 10h3zm4.036 0c.296 0 .535.224.535.5V12H15c.276 0 .5.239.5.533 0 .295-.224.534-.5.534l-1.429-.001V14.5c0 .276-.24.5-.535.5-.296 0-.536-.224-.536-.5v-1.434H11c-.276 0-.5-.238-.5-.533 0-.294.224-.533.5-.533h1.5v-1.5c0-.276.24-.5.536-.5zM7.5 0a4 4 0 110 8 4 4 0 010-8zm0 1a3 3 0 100 6 3 3 0 000-6z"
    fill={color}
    fillRule="evenodd"
  />
))

UserAdd.displayName = 'UserAdd'
