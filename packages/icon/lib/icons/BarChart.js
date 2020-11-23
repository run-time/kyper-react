import React from 'react'
import { createSvgIcon } from './base'

export const BarChart = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M9.5 0a.5.5 0 01.5.5v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V.5a.5.5 0 01.5-.5h3zm-6 10a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h3zm12-5a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h3zM9 1H7v14h2V1zM3 11H1v4h2v-4zm12-5h-2v9h2V6z"
    fill={color}
    fillRule="evenodd"
  />
))

BarChart.displayName = 'BarChart'
