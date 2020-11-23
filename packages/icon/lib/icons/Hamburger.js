import React from 'react'
import { createSvgIcon } from './base'

export const Hamburger = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M15.467 13.923c.294 0 .533.258.533.577 0 .319-.239.577-.533.577H.533C.24 15.077 0 14.819 0 14.5c0-.319.239-.577.533-.577h14.934zm0-6.461c.294 0 .533.258.533.576 0 .32-.239.577-.533.577H.533C.24 8.615 0 8.357 0 8.038c0-.318.239-.576.533-.576h14.934zm0-6.462c.294 0 .533.258.533.577 0 .319-.239.577-.533.577H.533C.24 2.154 0 1.896 0 1.577 0 1.258.239 1 .533 1h14.934z"
    fill={color}
    fillRule="evenodd"
  />
))

Hamburger.displayName = 'Hamburger'
