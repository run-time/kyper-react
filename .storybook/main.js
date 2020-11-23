const path = require('path')

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '../.storybook/addons/tokens/register.js',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    'storybook-dark-mode/register',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
  ],
  stories: [
    // load overview docs first
    '../docs/*.stories.mdx',

    // load components next
    '../packages/**/doc/*.stories.mdx',
    '../packages/**/lib/*.stories.[tj]s',
    '../packages/**/stories/*.stories.[tj]s',

    // load all other static documentation.stories.mdx pages last
    '../docs/**/*.stories.mdx',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Any installed Kyper modules need to be processed by webpack.
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, '../node_modules/@kyper/'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: config.module.rules[0].use[0].options.presets,
          plugins: config.module.rules[0].use[0].options.plugins,
        },
      },
    })

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        emitWarning: true,
      },
    })

    // Adds a resolvable path for the addons we've created
    config.resolve.alias['addons'] = path.resolve(__dirname, 'addons')

    return config
  },
  reactOptions: {
    fastRefresh: true,
  },
}
