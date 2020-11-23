import React, { useState } from 'react'
import withDesignTokens from 'addons/tokens/index.js'
import { Stories } from '@storybook/addon-docs/blocks'
import { DocStoryList } from 'addons/blocks/blocks.js'
import { Card } from '../../card/lib/index'
import { Tabs, TabDivider } from '../lib/index'

const StoryList = () => (
  <DocStoryList stories={<Stories includePrimary={true} title="" title="Tabs" />} />
)

export default {
  component: Tabs,
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
  title: 'COMPONENTS/Tabs/Examples',
}

export const TabBasic = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <Card padding="none">
      <Tabs
        onTabSelect={index => setSelectedTab(index)}
        selectedTabIndex={selectedTab}
        tabs={[
          { text: 'Tab 0', label: 'Tab 0 label' },
          { text: 'Tab 1', label: 'Tab 1 label' },
        ]}
      />
      <TabDivider />
      <div style={{ padding: 24 }}>
        {selectedTab === 0 ? <div>Hello Tab 0</div> : null}
        {selectedTab === 1 ? <div>Hello Tab 1</div> : null}
      </div>
    </Card>
  )
}
TabBasic.storyName = 'Basic'
