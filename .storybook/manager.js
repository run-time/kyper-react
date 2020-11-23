import { create } from '@storybook/theming/create'
import { addons } from '@storybook/addons'

import logoUrl from './public/logo/logo_light.png'

const theme = create({
  base: 'light',
  brandTitle: 'Kyper React',
  brandUrl: 'https://kyper.netlify.com/',
  // There is a bug in storybook.
  brandImage: process.env.NODE_ENV === 'production' ? logoUrl : '/logo/logo_light.png',
})

addons.setConfig({
  theme,
})
