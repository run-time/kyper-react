import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import withDesignTokens from 'addons/tokens/index.js'
import { Stories } from '@storybook/addon-docs/blocks'
import { DocStoryList, DocStoryContainer, FlexContainer } from 'addons/blocks/blocks.js'
import { MXLogo, MXLogoCopyright, MXLogoSquare, MXLogoOutlineSquare } from '@kyper/icon'
import { IconContainer } from 'addons/utils/icons'
import * as Icons from './Icon'

const StoryList = () => (
  <DocStoryList stories={<Stories includePrimary={true} title="" title="Icon" />} />
)

export default {
  component: MXLogo,
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
  title: 'COMPONENTS/Icon/Examples',
}

const Template = args => {
  const { background, color, size } = args

  return (
    <DocStoryContainer pad="0">
      <div style={{ padding: 24, background, overflowX: 'auto' }}>
        <FlexContainer padding={size * 0.5}>
          <MXLogo color={color} height={size} width={size} />
          <MXLogoCopyright color={color} height={size} width={size} />
          <MXLogoSquare color={color} height={size} width={size} />
          <MXLogoOutlineSquare color={color} height={size} width={size} />
        </FlexContainer>
      </div>
    </DocStoryContainer>
  )
}

export const IconDefault = Template.bind({})
IconDefault.storyName = 'Default'
IconDefault.args = {
  background: '#04b',
  color: '#6ae',
  size: 64,
}
IconDefault.argTypes = {
  background: { control: 'color' },
  color: { control: 'color' },
  size: { control: { type: 'range', min: 16, max: 512, step: 2 } },
}

const TemplateAll = args => {
  return (
    <DocStoryContainer>
      <IconContainer
        bg={useDarkMode() ? args.primary : args.secondary}
        fg={useDarkMode() ? args.secondary : args.primary}
        groupSize={4}
        icons={Icons}
      />
    </DocStoryContainer>
  )
}

export const IconAll = TemplateAll.bind({})
IconAll.storyName = 'All Icons'
IconAll.args = {
  primary: 'black',
  secondary: 'white',
}
IconAll.argTypes = {
  primary: { control: 'color' },
  secondary: { control: 'color' },
}
