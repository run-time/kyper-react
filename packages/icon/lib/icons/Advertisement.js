import React from 'react'
import { createSvgIcon } from './base'

export const Advertisement = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M3.188 12.2c.241 0 .437.209.437.467v1.4H8V13.6c0-.258.196-.467.438-.467.241 0 .437.21.437.467v.933c0 .258-.196.467-.438.467h-5.25c-.241 0-.437-.209-.437-.467v-1.866c0-.258.196-.467.438-.467zM15 1.467V13.6c0 .307-.273.53-.55.45L1.325 10.319A.463.463 0 011 9.867V5.2c0-.211.133-.396.325-.45L14.45 1.015c.277-.079.55.144.55.45zm-.875.607L1.875 5.56v3.95l12.25 3.484V2.074z"
    fill={color}
    fillRule="evenodd"
  />
))

Advertisement.displayName = 'Advertisement'
