import * as d3 from 'd3'
import PropTypes from 'prop-types'
import React, { useLayoutEffect, useRef } from 'react'
import { css } from 'glamor'
import { useTokens } from '@kyper/tokenprovider'

const propTypes = {
  numberOfTicks: PropTypes.number,
  tickFormat: PropTypes.func,
  tickValues: PropTypes.array,
  yScale: PropTypes.func,
}

export const YAxis = ({ numberOfTicks = 5, tickValues, tickFormat, yScale, ...rest }) => {
  const ref = useRef(null)
  const tokens = useTokens()
  const styles = getStyles(tokens)

  const yAxis = d3.axisLeft(yScale)

  if (tickValues) {
    yAxis.tickValues(tickValues) // Support for custom ticks
  } else {
    yAxis.ticks(numberOfTicks)
  }

  if (tickFormat) {
    yAxis.tickFormat(tickFormat)
  }

  useLayoutEffect(() => {
    // The easiest way to render the axis is to provide the axis function
    // with a D3 selection so it can manipulate the DOM.
    yAxis(d3.select(ref.current))
  }, [d3.select, ref.current, yAxis])

  return <g className={css(styles.g)} ref={ref} {...rest} />
}

const getStyles = tokens => ({
  g: {
    '> path': {
      fill: 'none',
      stroke: 'none',
    },
    ' .tick > line': {
      fill: 'none',
      stroke: 'none',
    },
    ' .tick > text': {
      fill: tokens.Color.Neutral600,
      fontSize: tokens.FontSize.XSmall,
      lineHeight: tokens.LineHeight.Small,
    },
  },
})

YAxis.propTypes = propTypes
