import React from 'react'
import withDesignTokens from 'addons/tokens/index.js'
import { Stories } from '@storybook/addon-docs/blocks'
import { DocStoryList, DocStoryContainer, FlexContainer } from 'addons/blocks/blocks.js'
import { Card } from './Card'

const StoryList = () => (
  <DocStoryList stories={<Stories includePrimary={true} title="" title="Card" />} />
)

export default {
  component: Card,
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
  title: 'COMPONENTS/Card/Examples',
}

const Template = args => (
  <DocStoryContainer pad="40px 30px">
    <div style={{ maxWidth: 400 }}>
      <Card {...args}>
        <h1>{args.title}</h1>
        <p style={{ lineHeight: '24px' }}>{args.content}</p>
      </Card>
    </div>
  </DocStoryContainer>
)

export const CardDefault = Template.bind({})
CardDefault.storyName = 'Default'
CardDefault.args = {
  title: 'Card Title',
  content:
    'Card layouts take advantage of many design principles allowing users to easily consume lots of information in bite sized chunks.',
}
CardDefault.argTypes = {
  children: { table: { disable: true } },
}

export const CardPadding = () => (
  <DocStoryContainer>
    <FlexContainer padding={16}>
      <Card padding="large">
        <h1>Padding Large</h1>
      </Card>
      <Card padding="small">
        <h1>Padding Small</h1>
      </Card>
      <Card padding="none">
        <h1>Padding None</h1>
      </Card>
    </FlexContainer>
  </DocStoryContainer>
)
CardPadding.storyName = 'Padding'

export const CardBorderRadius = () => (
  <DocStoryContainer>
    <FlexContainer padding={16}>
      <Card borderRadius="card">
        <h1>Border Radius Card</h1>
      </Card>
      <Card borderRadius="none">
        <h1>Border Radius None</h1>
      </Card>
    </FlexContainer>
  </DocStoryContainer>
)
CardBorderRadius.storyName = 'Border Radius'
