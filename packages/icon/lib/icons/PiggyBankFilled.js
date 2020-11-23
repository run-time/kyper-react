import React from 'react'
import { createSvgIcon } from './base'

export const PiggyBankFilled = createSvgIcon(({ color }) => (
  <path
    d="M11 4.667H5.745C5.03 3.449 3.826 3.26 3.239 3.34l-.76.109.685 2.352c-.514.422-.938.941-1.25 1.532H0V12h1.91A4.978 4.978 0 006 14.644V16h1.333v-1.333H10V16h1.333v-1.35A5.002 5.002 0 0016 9.667c0-2.758-2.243-5-5-5zm.333 4H6.667V7.333h4.666v1.334zM9 3.333A1.667 1.667 0 109 0a1.667 1.667 0 000 3.333z"
    fill={color}
  />
))

PiggyBankFilled.displayName = 'PiggyBankFilled'
