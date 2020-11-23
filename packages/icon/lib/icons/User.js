import React from 'react'
import { createSvgIcon } from './base'

export const User = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M14.361 11.747c.4.28.64.74.639 1.23V15.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-2.523c0-.49.238-.95.654-1.24A10.821 10.821 0 017.98 10a10.879 10.879 0 016.382 1.747zM7.979 11a9.856 9.856 0 00-5.766 1.565.5.5 0 00-.213.411V15h12v-2.025a.494.494 0 00-.198-.4A9.914 9.914 0 007.98 11zM8 0a4 4 0 110 8 4 4 0 010-8zm0 1a3 3 0 100 6 3 3 0 000-6z"
    fill={color}
    fillRule="evenodd"
  />
))

User.displayName = 'User'
