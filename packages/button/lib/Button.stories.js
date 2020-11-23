import React from 'react'
import withDesignTokens from 'addons/tokens/index.js'
import { Stories } from '@storybook/addon-docs/blocks'
import { DocStoryList, DocStoryContainer, FlexContainer } from 'addons/blocks/blocks.js'
import { Button, ButtonGroup } from './index'

const StoryList = () => (
  <DocStoryList stories={<Stories includePrimary={true} title="" title="Button" />} />
)

export default {
  component: Button,
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
  title: 'COMPONENTS/Button/Examples',
}

const Template = args => (
  <DocStoryContainer pad="40px 30px">
    <Button {...args}>{args.label}</Button>
  </DocStoryContainer>
)

export const ButtonDefault = Template.bind({})
ButtonDefault.storyName = 'Default'
ButtonDefault.args = {
  label: 'Default Button',
}
ButtonDefault.argTypes = {
  onClick: { table: { disable: true } },
}

export const ButtonPrimary = () => (
  <DocStoryContainer pad="40px 30px">
    <Button variant="primary">Primary Button</Button>
  </DocStoryContainer>
)
ButtonPrimary.storyName = 'Primary'

export const ButtonNeutral = () => (
  <DocStoryContainer pad="40px 30px">
    <Button variant="neutral">Neutral Button</Button>
  </DocStoryContainer>
)
ButtonNeutral.storyName = 'Neutral'

export const ButtonDestructive = () => (
  <DocStoryContainer pad="40px 30px">
    <Button variant="destructive">Destructive Button</Button>
  </DocStoryContainer>
)
ButtonDestructive.storyName = 'Destructive'

export const ButtonGroupDefault = () => (
  <DocStoryContainer>
    <FlexContainer padding={8}>
      <ButtonGroup>
        <Button variant="transparent">Transparent</Button>
        <Button>Neutral</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="destructive">Destructive</Button>
      </ButtonGroup>
    </FlexContainer>
  </DocStoryContainer>
)
ButtonGroupDefault.storyName = 'ButtonGroup'

export const ButtonTransparent = () => (
  <DocStoryContainer pad="10px 0">
    <ButtonGroup>
      <Button variant="transparent">Transparent Button</Button>
      <Button variant="transparent-tertiary">Transparent Tertiary</Button>
    </ButtonGroup>
  </DocStoryContainer>
)
ButtonTransparent.storyName = 'Transparent'

export const ButtonLink = () => (
  <DocStoryContainer pad="10px 0">
    <FlexContainer padding={8}>
      <ButtonGroup>
        <Button variant="link">Link Button</Button>
        <Button variant="link-tertiary">Link Tertiary</Button>
        <Button variant="link-destructive">Link Destructive</Button>
      </ButtonGroup>
    </FlexContainer>
    <FlexContainer padding={8}>
      <ButtonGroup>
        <Button size="small" variant="link">
          Link Button Small
        </Button>
        <Button size="small" variant="link-tertiary">
          Link Tertiary Small
        </Button>
        <Button size="small" variant="link-destructive">
          Link Destructive Small
        </Button>
      </ButtonGroup>
    </FlexContainer>
  </DocStoryContainer>
)
ButtonLink.storyName = 'Link'

export const ButtonAll = () => (
  <DocStoryContainer>
    <FlexContainer padding={8}>
      <ButtonGroup>
        <Button variant="primary">Primary</Button>
        <Button>Neutral</Button>
        <Button variant="destructive">Destructive</Button>
      </ButtonGroup>
    </FlexContainer>
    <FlexContainer padding={8}>
      <ButtonGroup>
        <Button variant="transparent">Transparent</Button>
        <Button variant="transparent-tertiary">Transparent Tertiary</Button>
      </ButtonGroup>
    </FlexContainer>
    <FlexContainer padding={8}>
      <ButtonGroup>
        <Button variant="link">Link Button</Button>
        <Button variant="link-tertiary">Link Tertiary</Button>
        <Button variant="link-destructive">Link Destructive</Button>
      </ButtonGroup>
    </FlexContainer>
    <FlexContainer padding={8}>
      <ButtonGroup>
        <Button size="small" variant="link">
          Link Button Small
        </Button>
        <Button size="small" variant="link-tertiary">
          Link Tertiary Small
        </Button>
        <Button size="small" variant="link-destructive">
          Link Destructive Small
        </Button>
      </ButtonGroup>
    </FlexContainer>
  </DocStoryContainer>
)
ButtonAll.storyName = 'All'
