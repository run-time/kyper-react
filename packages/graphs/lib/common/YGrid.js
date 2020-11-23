import * as d3 from 'd3'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { css } from 'glamor'
import { useTokens } from '@kyper/tokenprovider'

const propTypes = {
  numberOfTicks: PropTypes.number,
  tickValues: PropTypes.array,
  width: PropTypes.number,
  yScale: PropTypes.func,
}

export const YGrid = ({ numberOfTicks = 5, tickValues, width, yScale, ...rest }) => {
  const ref = useRef(null)
  const tokens = useTokens()
  const yGrid = d3
    .axisLeft(yScale)
    .tickSize(-width)
    .tickFormat('') //prevents a line from being drawn

  if (tickValues) {
    yGrid.tickValues(tickValues) // Support for custom ticks
  } else {
    yGrid.ticks(numberOfTicks)
  }

  yGrid(d3.select(ref.current))

  const styles = {
    grid: {
      '& .domain': {
        fill: 'none',
        stroke: 'none',
      },
      '& .tick line': {
        fill: 'none',
        stroke: tokens.Color.Neutral300,
      },
    },
  }

  return <g className={css(styles.grid)} ref={ref} {...rest} />
}

YGrid.propTypes = propTypes
