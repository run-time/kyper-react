import React from 'react'
import { createSvgIcon } from './base'

export const HeartFilled = createSvgIcon(({ color }) => (
  <path
    d="M14.682 2.318a4.5 4.5 0 00-6.364 0c-.121.121-.214.259-.318.389-.104-.13-.197-.268-.318-.389a4.5 4.5 0 00-6.364 6.364L8 15l6.682-6.318a4.5 4.5 0 000-6.364z"
    fill={color}
  />
))

HeartFilled.displayName = 'HeartFilled'
