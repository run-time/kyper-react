import React from 'react'
import withDesignTokens from 'addons/tokens/index.js'
import { Stories } from '@storybook/addon-docs/blocks'
import { DocStoryList, DocStoryContainer, FlexContainer } from 'addons/blocks/blocks.js'
import { Text } from '../lib/index'

const StoryList = () => (
  <DocStoryList stories={<Stories includePrimary={true} title="" title="Text" />} />
)

export default {
  component: Text,
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
  title: 'COMPONENTS/Text/Examples',
}

const Template = args => (
  <DocStoryContainer pad="40px 30px">
    <Text {...args}>{args.label}</Text>
  </DocStoryContainer>
)

export const TextDefault = Template.bind({})
TextDefault.storyName = 'Default'
TextDefault.args = {
  label: 'Default Text',
}
TextDefault.argTypes = {
  onClick: { table: { disable: true } },
}

export const TextAll = () => (
  <DocStoryContainer pad="40px 30px">
    <FlexContainer>
      <FlexContainer direction="column" padding={10}>
        <Text as="Small" uppercase={true}>
          Primary
        </Text>
        <Text tag="h1">Heading 1</Text>
        <Text tag="h2">Heading 2</Text>
        <Text tag="h3">Heading 3</Text>
        <br />
        <Text tag="p">Paragraph</Text>
        <Text as="Body" tag="p">
          Body
        </Text>
        <br />
        <Text as="ParagraphSmall" tag="p">
          Paragraph Small
        </Text>
        <Text as="Small" tag="p">
          Small
        </Text>
        <Text as="Tiny" tag="p">
          Tiny
        </Text>
      </FlexContainer>

      <FlexContainer direction="column" padding={10}>
        <Text as="Small" color="secondary" uppercase={true}>
          Secondary
        </Text>
        <Text color="secondary" tag="h1">
          Heading 1
        </Text>
        <Text color="secondary" tag="h2">
          Heading 2
        </Text>
        <Text color="secondary" tag="h3">
          Heading 3
        </Text>
        <br />
        <Text color="secondary" tag="p">
          Paragraph
        </Text>
        <Text as="Body" color="secondary" tag="p">
          Body
        </Text>
        <br />
        <Text as="ParagraphSmall" color="secondary" tag="p">
          Paragraph Small
        </Text>
        <Text as="Small" color="secondary" tag="p">
          Small
        </Text>
        <Text as="Tiny" color="secondary" tag="p">
          Tiny
        </Text>
      </FlexContainer>

      <FlexContainer direction="column" padding={10}>
        <Text as="Small" color="error" uppercase={true}>
          Error
        </Text>
        <Text color="error" tag="h1">
          Heading 1
        </Text>
        <Text color="error" tag="h2">
          Heading 2
        </Text>
        <Text color="error" tag="h3">
          Heading 3
        </Text>
        <br />
        <Text color="error" tag="p">
          Paragraph
        </Text>
        <Text as="Body" color="error" tag="p">
          Body
        </Text>
        <br />
        <Text as="ParagraphSmall" color="error" tag="p">
          Paragraph Small
        </Text>
        <Text as="Small" color="error" tag="p">
          Small
        </Text>
        <Text as="Tiny" color="error" tag="p">
          Tiny
        </Text>
      </FlexContainer>
    </FlexContainer>
  </DocStoryContainer>
)
TextAll.storyName = 'All'
