import React from 'react'
import withDesignTokens from 'addons/tokens/index.js'
import { Stories } from '@storybook/addon-docs/blocks'
import { DocStoryList, DocStoryContainer, FlexContainer } from 'addons/blocks/blocks.js'
import { Button } from '@kyper/button'
import { Text } from '@kyper/text'
import { TextInput } from '@kyper/input'
import { MessageBox } from '../lib/index'

const StoryList = () => (
  <DocStoryList stories={<Stories includePrimary={true} title="" title="MessageBox" />} />
)

export default {
  component: MessageBox,
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
  title: 'COMPONENTS/MessageBox/Examples',
}

const Template = args => (
  <DocStoryContainer pad="40px 30px">
    <MessageBox {...args}>{args.label}</MessageBox>
  </DocStoryContainer>
)

export const MessageBoxDefault = Template.bind({})
MessageBoxDefault.storyName = 'Default'
MessageBoxDefault.args = {
  label: 'Default MessageBox',
}
MessageBoxDefault.argTypes = {
  children: { table: { disable: true } },
  className: { table: { disable: true } },
  onClose: { table: { disable: true } },
  style: { table: { disable: true } },
}

export const MessageBoxInfo = () => (
  <DocStoryContainer>
    <FlexContainer>
      <MessageBox title="Title Goes Here">
        <Text as="ParagraphSmall" tag="p">
          As you can see, this MessageBox has a title...
        </Text>
      </MessageBox>
    </FlexContainer>
  </DocStoryContainer>
)
MessageBoxInfo.storyName = 'Help'

export const MessageBoxError = () => (
  <DocStoryContainer>
    <FlexContainer>
      <MessageBox title="Internet Broken" variant="error">
        <Text as="ParagraphSmall" tag="p">
          DOES NOT COMPUTE!!!
        </Text>
      </MessageBox>
    </FlexContainer>
  </DocStoryContainer>
)
MessageBoxError.storyName = 'Error'

export const MessageBoxSuccess = () => (
  <DocStoryContainer>
    <FlexContainer>
      <MessageBox
        onClose={() => /* eslint-disable */ alert('clean things up') /* eslint-enable */}
        title="Success"
        variant="success"
      >
        <Text as="ParagraphSmall" tag="p">
          This message box has a dismiss button...
        </Text>
      </MessageBox>
    </FlexContainer>
  </DocStoryContainer>
)
MessageBoxSuccess.storyName = 'Success'

export const MessageBoxWithActions = () => (
  <DocStoryContainer>
    <FlexContainer>
      <MessageBox
        onClose={() => /* eslint-disable */ alert('clean things up') /* eslint-enable */}
        title="Error message box with action buttons"
        variant="error"
      >
        <Text as="ParagraphSmall" tag="p">
          Message box with action buttons. You supply an array of objects with `title` and `onClick`
          properties with an optional `variant` property for the tertiary button style.
        </Text>
        <div style={{ display: 'flex', marginTop: 10 }}>
          <Button
            onClick={() => /* eslint-disable */ alert('Action 1') /* eslint-enable */}
            size="small"
            style={{ marginRight: 10 }}
            variant="link"
          >
            Link 1
          </Button>
          <Button
            onClick={() => /* eslint-disable */ alert('Action 2') /* eslint-enable */}
            size="small"
            style={{ marginRight: 10 }}
            variant="link-tertiary"
          >
            Link 2
          </Button>
        </div>
      </MessageBox>
    </FlexContainer>
  </DocStoryContainer>
)
MessageBoxWithActions.storyName = 'With Actions'

export const MessageBoxForm = () => {
  const [alertMode, setAlertMode] = React.useState(-1)
  const [values, setValues] = React.useState({ name: '', email: '' })

  const ErrorBox = () => (
    <MessageBox
      onClose={() => {
        setAlertMode(-1)
        return 0
      }}
      variant="error"
    >
      <Text as="ParagraphSmall" tag="p">
        An error occured while submitting the form.
      </Text>
    </MessageBox>
  )

  const SuccessBox = () => (
    <MessageBox
      onClose={() => {
        setAlertMode(-1)
        return 0
      }}
      variant="success"
    >
      <Text as="ParagraphSmall" tag="p">
        Thanks for filling everything out!
      </Text>
    </MessageBox>
  )

  const AlertChoice = () => {
    if (alertMode === 0) {
      return <ErrorBox />
    } else if (alertMode === 1) {
      return <SuccessBox />
    } else {
      return null
    }
  }

  return (
    <DocStoryContainer pad="40px 30px">
      <FlexContainer containerStyles={{ width: '50%' }} direction="column" padding={10}>
        <Text tag="h2">Press submit to see the error message</Text>
        <form
          onSubmit={e => {
            e.preventDefault()
            setAlertMode(values.name && values.email ? 1 : 0)
          }}
        >
          <TextInput
            label="Full Name"
            name="name"
            onChange={e => setValues({ ...values, ...{ name: e.target.value } })}
          />
          <br />
          <TextInput
            label="Email"
            name="email"
            onChange={e => setValues({ ...values, ...{ email: e.target.value } })}
            type="email"
          />
          <br />
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
        <AlertChoice />
      </FlexContainer>
    </DocStoryContainer>
  )
}
MessageBoxForm.storyName = 'Form Example'
