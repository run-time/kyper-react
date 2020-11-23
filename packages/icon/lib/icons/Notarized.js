import React from 'react'
import { createSvgIcon } from './base'

export const Notarized = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M11.5 0A1.5 1.5 0 0113 1.5v3.535a3.5 3.5 0 012.001 5.913L15 15.499a.5.5 0 01-.724.448l-1.776-.889-1.776.889a.5.5 0 01-.724-.448v-4.55a3.5 3.5 0 012-5.914V1.5a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h6a.5.5 0 010 1h-6A1.5 1.5 0 010 13.5v-12A1.5 1.5 0 011.5 0h10zm2.501 11.662A3.486 3.486 0 0112.5 12c-.537 0-1.045-.12-1.5-.336v3.027l1.276-.638a.5.5 0 01.448 0L14 14.69l.001-3.028zM12.5 6a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-6 4a.5.5 0 010 1h-3a.5.5 0 010-1h3zm0-3a.5.5 0 010 1h-3a.5.5 0 010-1h3zm2-3a.5.5 0 010 1h-5a.5.5 0 010-1h5z"
    fill={color}
    fillRule="evenodd"
  />
))

Notarized.displayName = 'Notarized'
