import PropTypes from 'prop-types'
import React, { useLayoutEffect, useState, useRef } from 'react'
import { useTokens } from '@kyper/tokenprovider'

const ANIMATION_MOUNT_DELAY = 700

const propTypes = {
  enableAnimations: PropTypes.bool,
  index: PropTypes.number,
  showBackground: PropTypes.bool,
  size: PropTypes.number,
  svgHeight: PropTypes.number.isRequired,
  svgWidth: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
}

export const BarLabel = ({
  children,
  enableAnimations,
  index,
  showBackground = true,
  size,
  svgHeight,
  svgWidth,
  x,
  y,
}) => {
  const textRef = useRef(null)
  const [opacity, setOpacity] = useState(enableAnimations ? 0 : 1)
  const [rectProps, setRectProps] = useState({ x: -1000, y: -1000 })
  const tokens = useTokens()
  const fontSize = size || tokens.FontSize.Small
  const styles = labelStyles(tokens, opacity, fontSize)
  const delay = ANIMATION_MOUNT_DELAY + index * 150

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity(1)
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useLayoutEffect(() => {
    if (showBackground) {
      const bbox = textRef.current.getBBox()

      setRectProps({
        x: bbox.x - 2, // centers the box with our additional gutter
        y: bbox.y,
        height: `${bbox.height}px`,
        width: `${bbox.width + 4}px`, // centers the box with our additional gutter
      })
    }
  }, [showBackground, svgHeight, svgWidth, textRef])

  return (
    <g style={styles.label}>
      {showBackground ? (
        <rect {...rectProps} fill={tokens.Color.NeutralWhite} style={styles.rect} />
      ) : null}
      <text aria-hidden={true} ref={textRef} style={styles.text} x={x} y={y}>
        {children}
      </text>
    </g>
  )
}

const labelStyles = (tokens, opacity, size) => ({
  text: {
    transition: 'opacity .2s',
    opacity,
    textAnchor: 'middle',
    fill: tokens.Color.Neutral700,
    fontSize: size,
  },
  rect: {
    transition: 'opacity .5s',
    opacity,
  },
})

BarLabel.propTypes = propTypes
