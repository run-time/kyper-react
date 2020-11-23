import React from 'react'
import * as d3 from 'd3'
import withDesignTokens from 'addons/tokens/index.js'
import { Stories } from '@storybook/addon-docs/blocks'
import { DocStoryList, DocStoryContainer } from 'addons/blocks/blocks.js'
import { BarChart } from '../lib/index'
import { dataBasic, dataGrouped, dataMixedValues } from './data/barData'

const StoryList = () => (
  <DocStoryList stories={<Stories includePrimary={true} title="" title="BarChart" />} />
)

export default {
  component: BarChart,
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
  title: 'COMPONENTS/BarChart/Examples',
}

// const Template = args => (
//   <DocStoryContainer pad="40px 30px">
//     <Button {...args}>{args.label}</Button>
//   </DocStoryContainer>
// )

// export const ButtonDefault = Template.bind({})
// ButtonDefault.storyName = 'Default'
// ButtonDefault.args = {
//   label: 'Default Button',
// }
// ButtonDefault.argTypes = {
//   onClick: { table: { disable: true } },
// }

export const BarChartBasic = () => (
  <DocStoryContainer pad="40px 30px">
    <BarChart
      data={dataBasic}
      height={300}
      labelFormatter={val => d3.format('$.3s')(val)}
      svgProps={{ style: { backgroundColor: 'white' } }}
      threshold={300}
      width={500}
      yFormatter={val => d3.format('$.2s')(val)}
    />
  </DocStoryContainer>
)
BarChartBasic.storyName = 'Basic'

export const BarChartMixedValues = () => (
  <DocStoryContainer pad="40px 30px">
    <BarChart
      data={dataMixedValues}
      height={300}
      labelFormatter={val => d3.format('$.3s')(val)}
      showBarLabelBackground={false}
      svgProps={{ style: { backgroundColor: 'white' } }}
      width={500}
      yFormatter={val => d3.format('$.2s')(val)}
    />
  </DocStoryContainer>
)
BarChartMixedValues.storyName = 'Mixed Values'

export const BarChartGrouped = () => (
  <DocStoryContainer pad="40px 30px">
    <BarChart
      data={dataGrouped}
      height={300}
      labelFormatter={val => d3.format('$.2s')(val)}
      svgProps={{ style: { backgroundColor: 'white' } }}
      threshold={300}
      width={500}
      yDomain={[0, 7000]}
      yFormatter={val => d3.format('$.2s')(val)}
    />
  </DocStoryContainer>
)
BarChartGrouped.storyName = 'Grouped'

export const BarChartCustomColors = () => (
  <DocStoryContainer pad="40px 30px">
    <BarChart
      colorRange={['#60A9FF', '#C8BAEE']}
      data={dataGrouped}
      height={300}
      labelFormatter={val => d3.format('$.2s')(val)}
      svgProps={{ style: { backgroundColor: 'white' } }}
      width={500}
      yFormatter={val => d3.format('$.2s')(val)}
    />
  </DocStoryContainer>
)
BarChartCustomColors.storyName = 'Custom Colors'
