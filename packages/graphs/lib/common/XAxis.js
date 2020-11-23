import * as d3 from 'd3'
import PropTypes from 'prop-types'
import React, { useLayoutEffect, useRef } from 'react'
import { css } from 'glamor'
import { useTokens } from '@kyper/tokenprovider'

const propTypes = {
  tickFormat: PropTypes.string,
  tickValues: PropTypes.array,
  values: PropTypes.array,
  xScale: PropTypes.func,
}

export const XAxis = ({ tickFormat, tickValues, xScale, ...rest }) => {
  const ref = useRef(null)
  const tokens = useTokens()
  const styles = getStyles(tokens)

  const xAxis = d3.axisBottom(xScale).tickSize(9) // Extends the line length to push our Text down 12 pixels (y=12)

  if (tickValues) {
    xAxis.tickValues(tickValues)
  }

  if (tickFormat) {
    xAxis.tickFormat(tickFormat)
  } else {
    xAxis.tickFormat(val => val)
  }

  useLayoutEffect(() => {
    // The easiest way to render the axis is to provide the axis function
    // with a D3 selection so it can manipulate the DOM.
    xAxis(d3.select(ref.current))
  }, [d3.select, ref.current, xAxis])

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

XAxis.propTypes = propTypes
