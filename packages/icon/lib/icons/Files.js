import React from 'react'
import { createSvgIcon } from './base'

export const Files = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M15.5 7a.5.5 0 01.5.5v8a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-6A.5.5 0 01.5 9h6a.5.5 0 01.5.5V15h2V7.5a.5.5 0 01.5-.5h6zM6 10H1v5h5v-5zm9-2h-5v7h5V8zM4.5 12a.5.5 0 010 1h-2a.5.5 0 010-1h2zm9 0a.5.5 0 010 1h-2a.5.5 0 010-1h2zm0-2a.5.5 0 010 1h-2a.5.5 0 010-1h2zm-1-10a.5.5 0 01.5.5v5a.5.5 0 01-1 0V1H4v6.5a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5h9zm-3 3a.5.5 0 010 1h-3a.5.5 0 010-1h3z"
    fill={color}
    fillRule="evenodd"
  />
))

Files.displayName = 'Files'
