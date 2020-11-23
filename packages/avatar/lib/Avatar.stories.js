import React from 'react'
import withDesignTokens from 'addons/tokens/index.js'
import { Stories } from '@storybook/addon-docs/blocks'
import { DocStoryList, DocStoryContainer, FlexContainer } from 'addons/blocks/blocks.js'
import { Avatar } from './Avatar'
import { Eye } from '@kyper/icon'

const StoryList = () => (
  <DocStoryList stories={<Stories includePrimary={true} title="" title="Avatar" />} />
)

export default {
  component: Avatar,
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
  title: 'COMPONENTS/Avatar/Examples',
}

const Template = args => (
  <DocStoryContainer pad="40px 30px">
    <Avatar {...args} />
  </DocStoryContainer>
)

export const AvatarDefault = Template.bind({})
AvatarDefault.storyName = 'Default'
AvatarDefault.args = {}

export const AvatarAll = () => (
  <DocStoryContainer>
    <FlexContainer direction="column">
      <FlexContainer padding={16}>
        <Avatar size={16}>B</Avatar>
        <Avatar alt="Your profile" size={24} src="https://www.fillmurray.com/60/60" />
        <Avatar alt="Your profile" size={24} src="https://www.fillmurray.com/100/100" />
        <Avatar size={32}>
          <Eye />
        </Avatar>
        <Avatar size={44} />
      </FlexContainer>
    </FlexContainer>
  </DocStoryContainer>
)
AvatarAll.storyName = 'Variations'
