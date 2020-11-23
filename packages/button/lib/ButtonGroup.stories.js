import React from 'react'
import withDesignTokens from 'addons/tokens/index.js'
import { Stories } from '@storybook/addon-docs/blocks'
import { DocStoryList, DocStoryContainer } from 'addons/blocks/blocks.js'
import { Button, ButtonGroup } from './index'
import { Card } from '../../card/lib/index'

const StoryList = () => (
  <DocStoryList stories={<Stories includePrimary={true} title="" title="Button" />} />
)

export default {
  component: ButtonGroup,
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
  title: 'COMPONENTS/ButtonGroup/Examples',
}

const Template = () => {
  const buttonVariants = [
    'transparent',
    'transparent-tertiary',
    'neutral',
    'primary',
    'destructive',
  ]
  const linkVariants = ['link', 'link-tertiary', 'link-destructive']
  const buttonList = []
  const linkList = []

  for (let i = 0; i < buttonVariants.length; i++) {
    buttonList.push(
      <Button key={`button_${i}`} variant={buttonVariants[i]}>
        {buttonVariants[i]}
      </Button>,
    )
  }

  for (let i = 0; i < linkVariants.length; i++) {
    linkList.push(
      <Button key={`link_${i}`} variant={linkVariants[i]}>
        {linkVariants[i]}
      </Button>,
    )
  }

  return (
    <DocStoryContainer pad="40px 30px">
      <Card padding="large">
        <h1>Button Variants</h1>
        <ButtonGroup>{buttonList}</ButtonGroup>
      </Card>
      <br />
      <Card padding="large">
        <h1>Link Variants</h1>
        <ButtonGroup>{linkList}</ButtonGroup>
      </Card>
    </DocStoryContainer>
  )
}

export const ButtonGroupDefault = Template.bind({})
ButtonGroupDefault.storyName = 'Default'
ButtonGroupDefault.argTypes = {
  children: { table: { disable: true } },
}
