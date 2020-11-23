import React from 'react'
import withDesignTokens from 'addons/tokens/index.js'
import { Stories } from '@storybook/addon-docs/blocks'
import { DocStoryList, DocStoryContainer } from 'addons/blocks/blocks.js'
import { Tag } from '../lib/index'

const StoryList = () => (
  <DocStoryList stories={<Stories includePrimary={true} title="" title="Tag" />} />
)

export default {
  component: Tag,
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
  title: 'COMPONENTS/Tag/Examples',
}

const Template = args => (
  <DocStoryContainer pad="40px 30px">
    <div style={{ display: 'inline-block' }}>
      <Tag {...args}>{args.label}</Tag>
    </div>
  </DocStoryContainer>
)

export const TagDefault = Template.bind({})
TagDefault.storyName = 'Default'
TagDefault.args = {
  title: 'Default Tag',
}
TagDefault.argTypes = {
  className: { table: { disable: true } },
}
