import React from 'react'
import { createSvgIcon } from './base'

export const WidgetsMenu = createSvgIcon(({ color }) => (
  <path
    d="M0 0h3v3H0V0zM6.5 0h3v3h-3V0zM13 0h3v3h-3V0zM0 13h3v3H0v-3zM6.5 13h3v3h-3v-3zM13 13h3v3h-3v-3zM0 6.5h3v3H0v-3zM6.5 6.5h3v3h-3v-3zM13 6.5h3v3h-3v-3z"
    fill={color}
  />
))

WidgetsMenu.displayName = 'WidgetsMenu'
