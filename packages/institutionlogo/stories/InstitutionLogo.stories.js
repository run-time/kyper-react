import React from 'react'
import withDesignTokens from 'addons/tokens/index.js'
import { Stories } from '@storybook/addon-docs/blocks'
import { DocStoryList, DocStoryContainer } from 'addons/blocks/blocks.js'
import { InstitutionLogo } from '../lib/index'

const StoryList = () => (
  <DocStoryList stories={<Stories includePrimary={true} title="" title="Avatar" />} />
)

export default {
  component: InstitutionLogo,
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
  title: 'COMPONENTS/InstitutionLogo/Examples',
}

const Template = args => (
  <DocStoryContainer pad="40px 30px">
    <InstitutionLogo {...args} />
  </DocStoryContainer>
)

export const InstitutionLogoDefault = Template.bind({})
InstitutionLogoDefault.storyName = 'Default'
InstitutionLogoDefault.args = {}
InstitutionLogoDefault.argTypes = {
  institutionGuid: {
    control: {
      type: 'select',
      options: [
        'INS-3aeb38da-26e4-3818-e0fa-673315ab7754',
        'INS-180aa360-942f-2cf9-0465-01cd53676696',
        'INS-c95a758b-22e2-8b88-2d71-617ba9f7a9bd',
        'INS-80feb7d4-f8ce-fa5e-cc71-bb22d7492fda',
      ],
    },
  },
  size: { control: { type: 'range', min: 32, max: 100, step: 4 } },
  style: { table: { disable: true } },
}

export const InstitutionLogoCustomSource = () => (
  <DocStoryContainer>
    <InstitutionLogo size={150} src="http://www.mx.com/assets/images/mx-logo-grey.svg" />
  </DocStoryContainer>
)
InstitutionLogoCustomSource.storyName = 'Custom Source'

export const InstitutionLogoCustomAlt = () => (
  <DocStoryContainer>
    <InstitutionLogo
      alt="MX Logo"
      institutionGuid="INS-3aeb38da-26e4-3818-e0fa-673315ab7754"
      size={50}
    />
  </DocStoryContainer>
)
InstitutionLogoCustomAlt.storyName = 'Custom Alt'

export const InstitutionLogoCustomStyle = () => (
  <DocStoryContainer>
    <InstitutionLogo size={50} style={{ border: '4px dashed red', borderRadius: 12 }} />
  </DocStoryContainer>
)
InstitutionLogoCustomStyle.storyName = 'Custom Style'

export const InstitutionLogoCustomError = () => (
  <DocStoryContainer>
    <InstitutionLogo
      onError={e =>
        (e.target.src =
          'http://content.moneydesktop.com/storage/MD_Assets/browser-icons/chrome-icon.png')
      }
      size={50}
    />
  </DocStoryContainer>
)
InstitutionLogoCustomError.storyName = 'Custom onError'
