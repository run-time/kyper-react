/*
 ********************************************************************************
 ** ROOT FILES
 ********************************************************************************
 */

// package.json
const tempPackageJson = comp => `
{
  "name": "@kyper/${comp.toLowerCase()}",
  "version": "1.0.0",
  "description": "${comp}",
  "author": "MX",
  "homepage": "",
  "license": "MIT",
  "main": "lib/index.js",
  "directories": {
    "lib": "lib",
    "test": "__tests__"
  },
  "files": [
    "lib"
  ],
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "git@gitlab.mx.com:mx/kyper-react.git"
  },
  "scripts": {
    "lint": "eslint lib/*.js"
  },
  "peerDependencies": {
    "prop-types": "^15.7.2",
    "react": "^16.12.0",
    "react-dom": "^16.12.0"
  }
}
`

// .eslintrc.json
const tempLint = () => `
{
  "extends": "../../.eslintrc.json"
}
`

// README.md
const tempReadme = comp => `
# \`@kyper/${comp.toLowerCase()}\`

> TODO: description

## Usage

// TODO: DEMONSTRATE API
`

// CHANGELOG.md
const tempChangelog = comp => `
## [1.0.0] - 12-25-2020

- **ADDED** - for new features / initial release for ${comp}
- **CHANGED** - for changes in existing functionality.
- **FIXED** - for any bug fixes.
- **DEPRECATED** - for soon-to-be removed features.
- **REMOVED** - for now removed features.
- **SECURITY** - in case of vulnerabilities.
`

/*
 ********************************************************************************
 ** COMPONENT FILES
 ********************************************************************************
 */

// Comp.js
const tempComponent = comp => `
import React from 'react'
import PropTypes from 'prop-types'

export const ${comp} = ({ name = 'World' }) => {
  const css = {
    border: '2px dashed #3E9651',
    color: '#3E9651',
    background: '#B4EA8B',
    padding: 20,
    fontFamily: 'sans-serif',
    fontSize: 24
  }

  return (
    <div style={css}>Hello, {name}!</div>
  )
}

${comp}.propTypes = {
  name: PropTypes.string,
}

${comp}.displayName = '${comp}'
`

// index.js
const tempIndex = comp => `
export { ${comp} } from './${comp}'
`

/*
 ********************************************************************************
 ** STORY FILES
 ********************************************************************************
 */

// Comp.stories.js
const tempStory = comp => `
import React from 'react'
import withDesignTokens from 'addons/tokens/index.js'
import { Stories } from '@storybook/addon-docs/blocks'
import { DocStoryList, DocStoryContainer, FlexContainer } from 'addons/blocks/blocks.js'
import { ${comp} } from '../lib/index'

const StoryList = () => (
  <DocStoryList stories={<Stories includePrimary={true} title="" title="${comp}" />} />
)

export default {
  component: ${comp},
  decorators: [withDesignTokens],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      page: StoryList,
    },
    previewTabs: {
      canvas: { hidden: true },
      'storybook/docs/panel': { hidden: true },
    },
  },
  title: 'COMPONENTS/${comp}/Examples',
}

const Template = args => (
  <DocStoryContainer pad="40px 30px">
    <${comp} {...args} />
  </DocStoryContainer>
)

export const ${comp}Default = Template.bind({})
${comp}Default.storyName = 'Default'
${comp}Default.args = {
  name: 'World',
}
`

/*
 ********************************************************************************
 ** DOC FILES
 ********************************************************************************
 */

// Comp.usage.stories.mdx
const tempUsage = comp => `
import { Meta } from '@storybook/addon-docs/blocks'

<Meta title="COMPONENTS/${comp}/Usage" />

# ${comp}

Add usage documentation for this component

${comp === 'MxSpin' ? `[Live demo](/?path=/story/components-mxspin-examples--mx-spin-default)` : ''}

## Overview

#### When to use

#### When not to use

## Do's and don'ts

## Resources

- <a href="https://www.carbondesignsystem.com/components/button/usage" target="_blank">Carbon Design System</a>
- <a href="https://material.io/components/buttons#usage" target="_blank">Google Material</a>
`

// Comp.version.stories.mdx
const tempInterface = comp => `
import { Meta, ArgsTable } from '@storybook/addon-docs/blocks'
import { DocCodePage } from 'addons/blocks/blocks'
import { ${comp} } from '../lib/index'
import packageJson from '../package.json'
import changelog from '../CHANGELOG.md'

<Meta component={${comp}} title="COMPONENTS/${comp}/Interface" />

<DocCodePage argTable={<ArgsTable of={${comp}} />} json={packageJson} title="${comp}" changelog={changelog} />
`

/*
 ********************************************************************************
 ** TEST FILES
 ********************************************************************************
 */

// Comp.test.js
const tempTest = comp => `
import React from 'react'
import { mount } from 'enzyme'
import { ${comp} } from '../lib/index'

describe('@kyper/${comp.toLowerCase()}', () => {
  let wrapper

  it('renders without props', () => {
    wrapper = mount(<${comp} />)

    expect(wrapper.html()).toContain('Hello')
  })
})
`

// root files
exports.tempPackageJson = tempPackageJson
exports.tempLint = tempLint
exports.tempReadme = tempReadme
exports.tempChangelog = tempChangelog

// component files
exports.tempComponent = tempComponent
exports.tempIndex = tempIndex

// story files
exports.tempStory = tempStory

// test files
exports.tempTest = tempTest

// doc files
exports.tempInterface = tempInterface
exports.tempUsage = tempUsage
