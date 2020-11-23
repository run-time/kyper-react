import React from 'react'
import { createSvgIcon } from './base'

export const Undo = createSvgIcon(({ color }) => (
  <path
    d="M.504 5A.502.502 0 000 5.5v5c0 .276.226.5.504.5h5.04a.502.502 0 00.503-.5c0-.276-.225-.5-.504-.5H1.78c1.676-2.439 4.585-4 7.669-4 2.117 0 4.121.721 5.729 2.022a.507.507 0 00.709-.072.497.497 0 00-.072-.704A10.086 10.086 0 009.449 5C6.065 5 2.878 6.69 1.006 9.351L1.008 5.5c0-.276-.226-.5-.504-.5z"
    fill={color}
  />
))

Undo.displayName = 'Undo'
