import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import { useTokens } from '@kyper/tokenprovider'

import { Graph } from '../Graph'
import { Bar } from './Bar'
import { BarLabel } from './BarLabel'
import { Threshold } from '../common/Threshold'
import { YGrid } from '../common/YGrid'
import { XAxis } from '../common/XAxis'
import { YAxis } from '../common/YAxis'

const isEnterOrSpace = e => e.key === 'Enter' || e.key === ' '

// padding for left and right of the first and last bar. 14 left, 14 right.
const OUTER_PADDING = 14
const BAR_LABEL_SPACING = 8

const propTypes = {
  /**
   * An Array of colors to be applied to the bars.
   */
  colorRange: PropTypes.array,
  /**
   * An Array of `label` and `value` objects representing the graphing data. Grouped data is provided by duplicated labels and the key `subLabel`. Additional options can be passed in which are described below.
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      ariaLabel: PropTypes.string,
      disableBarLabel: PropTypes.bool,
      enableEmphasis: PropTypes.bool,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      subLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,

  enableAnimations: PropTypes.bool,
  enableXAxis: PropTypes.bool,
  enableYAxis: PropTypes.bool,
  enableYGrid: PropTypes.bool,
  /**
   * Passed to the `Graph` component.
   */
  height: PropTypes.number.isRequired,
  /**
   * A function that will be called with the `y axis` values so it can be formatted and displayed on the label.
   */
  labelFormatter: PropTypes.func,
  /**
   * An object for supporting different spacing needs on each side of the graph.
   */
  margins: PropTypes.object.isRequired,
  /**
   * A function called when you click on a specific bar. Called with the index from the original data set provided.
   */
  onBarClick: PropTypes.func,
  /**
   * Toggle the white background behind the bar labels.
   */
  showBarLabelBackground: PropTypes.bool,
  /**
   * Passed to the `Graph` component.
   */
  svgProps: PropTypes.object,
  /**
   * Displays a dashed line at the `y axis` value defined. Usually used to show an average over time.
   */
  threshold: PropTypes.number,
  /**
   * Passed to the `Graph` component.
   */
  width: PropTypes.number.isRequired,
  /**
   * A function that will be called with the `x axis` values so it can be formatted.
   */
  xFormatter: PropTypes.func,
  /**
   * Useful if you'd like to force the y domain to start at 0 or add a buffer to the min and max values. [MinValue, MaxValue]
   */
  yDomain: PropTypes.array,
  /**
   * A function that will be called with the `y axis` values so it can be formatted.
   */
  yFormatter: PropTypes.func,
}
const defaultProps = {
  margins: {
    left: 40,
    top: 20,
    right: 40,
    bottom: 30,
  },
  enableAnimations: true,
  enableXAxis: true,
  enableYAxis: true,
  enableYGrid: true,
  showBarLabelBackground: true,
  svgProps: {},
}

export const BarChart = ({
  colorRange,
  data,
  enableAnimations,
  enableXAxis,
  enableYAxis,
  enableYGrid,
  height,
  labelFormatter,
  margins,
  onBarClick,
  showBarLabelBackground,
  svgProps,
  threshold,
  width,
  yDomain,
  xFormatter,
  yFormatter,
}) => {
  const tokens = useTokens()
  const styles = getStyles(tokens)
  const groupedColors = [
    tokens.Color.Chart1,
    tokens.Color.Chart2,
    tokens.Color.Chart3,
    tokens.Color.Chart4,
    tokens.Color.Chart5,
    tokens.Color.Chart6,
    tokens.Color.Chart7,
  ]

  const values = data.map(d => d.value)
  const labels = data.map(d => d.label)
  const subLabels = data.map(d => d.subLabel)

  const uniqueLabels = [...new Set(labels)]
  const uniqueSubLabels = [...new Set(subLabels)]
  const [minValue, maxValue] = d3.extent(values)
  const hasGroupedData = uniqueLabels.length !== labels.length
  const hasNegative = minValue < 0

  const scaledMin = minValue > 0 ? minValue - minValue * 0.1 : minValue - minValue * -0.1
  const scaledMax = maxValue > 0 ? maxValue * 1.1 : maxValue + maxValue * -0.1

  const finalDomain = yDomain ? yDomain : [scaledMin, scaledMax]

  const xScale = d3
    .scaleBand()
    .domain(uniqueLabels)
    .range([margins.left, width - margins.right])
    .paddingInner(hasGroupedData ? 1 / (uniqueSubLabels.length + 1) : 0.5) // The padding between the bars should equal the width of 1 total bar

  // calculates the padding percent based on the step without padding.
  // Approximate only, D3 can and will change this value but we should be within a few pixels.
  const outerPaddingRef = useRef(Math.ceil((OUTER_PADDING / xScale.step()).toFixed(3) * 100) / 100)

  // Update our outer padding. This will probably have problems when updating data?
  xScale.paddingOuter(outerPaddingRef.current.toFixed(3))

  let xSubScale

  if (hasGroupedData) {
    xSubScale = d3
      .scaleBand()
      .domain(uniqueSubLabels)
      .range([0, xScale.bandwidth()])
      .padding([0])
  }

  const yScale = d3
    .scaleLinear()
    // defaults to a buffer of 10% on each side of the domain so we don't go to the edge.
    .domain(finalDomain)
    .nice()
    .range([height - margins.bottom, margins.top])

  const colorScale = d3.scaleOrdinal().domain(hasGroupedData ? uniqueSubLabels : uniqueLabels)

  if (colorRange) {
    colorScale.range(colorRange)
  } else {
    colorScale.range(hasGroupedData ? groupedColors : [tokens.Color.Chart1])
  }

  return (
    <Graph height={height} width={width} {...svgProps}>
      {enableYGrid ? (
        <YGrid
          transform={`translate(${margins.left},0)`}
          width={width - margins.right - margins.left}
          yScale={yScale}
        />
      ) : null}

      {threshold ? (
        <Threshold margins={margins} threshold={threshold} width={width} yScale={yScale} />
      ) : null}
      <g role="list">
        {data.map((d, index) => {
          const isPositive = d.value >= 0 // We want labels above the y axis zero point.
          const yValue = isPositive ? yScale(d.value) : yScale(0)
          const xValue = hasGroupedData ? xSubScale(d.subLabel) : xScale(d.label)
          const band = hasGroupedData ? xSubScale.bandwidth() : xScale.bandwidth()

          const baseHeight = hasNegative
            ? Math.abs(yScale(d.value) - yScale(0))
            : height - margins.bottom - yValue

          return (
            <g
              aria-label={d.ariaLabel || `${d.label} has a value of ${d.value}`}
              key={index}
              onClick={() => {
                if (onBarClick) {
                  onBarClick(index)
                }
              }}
              onKeyUp={e => {
                if (onBarClick && isEnterOrSpace(e)) {
                  onBarClick(index)
                }
              }}
              role={onBarClick ? 'button' : 'listitem'}
              style={onBarClick ? styles.actionableBar : null}
              tabIndex={onBarClick ? 0 : null}
              transform={hasGroupedData ? `translate(${xScale(d.label)}, 0)` : null}
            >
              <Bar
                enableAnimations={enableAnimations}
                enableEmphasis={d.enableEmphasis}
                fill={hasGroupedData ? colorScale(d.subLabel) : colorScale(d.label)}
                hasNegative={hasNegative}
                height={baseHeight}
                index={index}
                value={d.value}
                width={band}
                x={xValue}
                y={yValue}
              />
              {d.disableBarLabel !== true ? (
                <BarLabel
                  enableAnimations={enableAnimations}
                  index={index}
                  showBackground={showBarLabelBackground}
                  size={hasGroupedData ? tokens.FontSize.XSmall : tokens.FontSize.Small}
                  svgHeight={height}
                  svgWidth={width}
                  x={xValue + band / 2} // centered on the bar
                  y={
                    isPositive
                      ? yValue - BAR_LABEL_SPACING
                      : yScale(d.value) + BAR_LABEL_SPACING + 8
                  } // 8 = account for font height
                >
                  {labelFormatter ? labelFormatter(d.value) : d.value}
                </BarLabel>
              ) : null}
            </g>
          )
        })}
      </g>
      {enableXAxis ? (
        <XAxis
          aria-hidden={true}
          tickFormat={xFormatter}
          transform={`translate(0,${height - margins.bottom})`}
          xScale={xScale}
        />
      ) : null}

      {enableYAxis ? (
        <YAxis
          aria-hidden={true}
          tickFormat={yFormatter}
          transform={`translate(${margins.left},0)`}
          yScale={yScale}
        />
      ) : null}
    </Graph>
  )
}

BarChart.defaultProps = defaultProps
BarChart.propTypes = propTypes

const getStyles = tokens => {
  return {
    threshold: {
      stroke: tokens.Color.Neutral600,
      strokeDasharray: '0.1, 5.9',
      strokeWidth: 2,
      strokeLinecap: 'round',
    },
    actionableBar: {
      cursor: 'pointer',
    },
  }
}
