import { themes } from '@storybook/theming'
import logoLight from './public/logo/logo_light.png'
import logoDark from './public/logo/logo_dark.gif'

const mxViewports = {
  iphone5: {
    name: 'iPhone 5',
    styles: {
      height: '568px',
      width: '320px',
    },
    type: 'mobile',
  },
  iphone6: {
    name: 'iPhone 6',
    styles: {
      height: '667px',
      width: '375px',
    },
    type: 'mobile',
  },
  iphone8p: {
    name: 'iPhone 8 Plus',
    styles: {
      height: '736px',
      width: '414px',
    },
    type: 'mobile',
  },
  iphonex: {
    name: 'iPhone X',
    styles: {
      height: '812px',
      width: '375px',
    },
    type: 'mobile',
  },
  iphonexsmax: {
    name: 'iPhone XS Max',
    styles: {
      height: '896px',
      width: '414px',
    },
    type: 'mobile',
  },
  ipad: {
    name: 'iPad',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
  ipad10p: {
    name: 'iPad Pro 10.5-in',
    styles: {
      height: '1112px',
      width: '834px',
    },
    type: 'tablet',
  },
  ipad12p: {
    name: 'iPad Pro 12.9-in',
    styles: {
      height: '1366px',
      width: '1024px',
    },
    type: 'tablet',
  },
  galaxys5: {
    name: 'Galaxy S5',
    styles: {
      height: '640px',
      width: '360px',
    },
    type: 'mobile',
  },
  galaxys9: {
    name: 'Galaxy S9',
    styles: {
      height: '740px',
      width: '360px',
    },
    type: 'mobile',
  },
  pixel: {
    name: 'Pixel',
    styles: {
      height: '960px',
      width: '540px',
    },
    type: 'mobile',
  },
  pixelxl: {
    name: 'Pixel XL',
    styles: {
      height: '1280px',
      width: '720px',
    },
    type: 'mobile',
  },
}

export const parameters = {
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: false,
  },
  controls: { expanded: false },
  darkMode: {
    // storybook theme overrides
    dark: {
      ...themes.dark,
      brandTitle: 'Kyper React',
      brandUrl: 'https://kyper.netlify.com/',
      brandImage: process.env.NODE_ENV === 'production' ? logoDark : '/logo/logo_dark.gif',
    },
    light: {
      ...themes.light,
      brandTitle: 'Kyper React',
      brandUrl: 'https://kyper.netlify.com/',
      brandImage: process.env.NODE_ENV === 'production' ? logoLight : '/logo/logo_light.png',
    },
    darkClass: 'mx-dark',
    lightClass: 'mx-light',
  },
  previewTabs: {
    canvas: { hidden: true },
    'storybook/docs/panel': { hidden: true },
  },
  viewport: {
    viewports: mxViewports,
  },
}
