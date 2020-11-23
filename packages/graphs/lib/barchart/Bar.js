import * as d3 from 'd3'
import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import { useTokens } from '@kyper/tokenprovider'

import { Emphasis } from './Emphasis'

const ANIMATION_MOUNT_DELAY = 500

const propTypes = {
  enableAnimations: PropTypes.bool,
  enableEmphasis: PropTypes.bool,
  fill: PropTypes.string,
  hasNegative: PropTypes.bool,
  height: PropTypes.number.isRequired,
  index: PropTypes.number,
  radius: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
}

const defaultValues = {
  hasNegative: false,
  radius: 2,
}

export const Bar = React.memo(
  ({
    enableAnimations,
    enableEmphasis,
    fill,
    hasNegative,
    height,
    index,
    radius,
    style,
    value,
    width,
    x,
    y,
  }) => {
    // Render nothing for 0
    if (!value) return null

    const tokens = useTokens()
    const ref = useRef()
    const pathData = drawPath(height, radius, width, x, y, value, hasNegative)
    const styles = getStyles(tokens, style, fill)
    const delay = ANIMATION_MOUNT_DELAY + index * 50

    useEffect(() => {
      if (ref.current && enableAnimations) {
        const transform = transformBar(0, value, height, y)

        d3.select(ref.current)
          .attr('transform', transform)
          .transition()
          .delay(delay) // staggers the animation 50 millisends for each bar being rendered.
          .ease(d3.easeExpInOut)
          .duration(1000)
          .attr('transform', 'scale(1)')
      }
    }, [])

    return (
      <React.Fragment>
        <path aria-hidden={true} d={pathData} ref={ref} style={styles} />
        {enableEmphasis ? (
          <Emphasis
            delay={delay}
            enableAnimations={enableAnimations}
            r={radius}
            w={width}
            x={x}
            y={y}
          />
        ) : null}
      </React.Fragment>
    )
  },
)

Bar.propTypes = propTypes
Bar.displayName = 'Bar'
Bar.defaultProps = defaultValues

const getStyles = (tokens, style, fill) => {
  const base = {
    fill: fill || tokens.Color.Chart1,
  }

  if (style) {
    return { ...base, ...style }
  }

  return base
}

const drawPath = (height, radius, width, x, y, value, hasNegative) => {
  const r = radius
  const h = height
  const w = width

  // Draw some really awesome bars...essentially used for adding the radius
  // effect to the end of the bar. This is a good resource if you'd like to learn more.
  // https://css-tricks.com/svg-path-syntax-illustrated-guide/

  // if our current bar is positive or 0 and no other bars are negative.
  if (value > 0 || (value === 0 && !hasNegative)) {
    return `M${x},${y}h${w - r}a${r},${r} 0 0 1 ${r},${r}v${h - r}h${-w}v${-h +
      r}a${r},${r} 0 0 1 ${r},${-r}Z`
    // else we have a mixture of positive and negative numbers and draw a different path
  } else {
    return `M${x},${y}h${w - r}a${r},${r} 0 0 1 ${r},${r}v${h - r}a${r},${r} 0 0 1 ${-r},${r}h${r *
      2 -
      w}a${r},${r} 0 0 1 ${-r},${-r}v${r - h}a${r},${r} 0 0 1 ${r},${-r}Z`
  }
}

const transformBar = (factor, value, height, y) => {
  const centerX = 0
  const centerY = value > 0 ? y + height : y
  const sx = -centerX * (factor - 1)
  const sy = -centerY * (factor - 1)

  return `translate(${sx},${sy}) scale(1, ${factor})`
}
