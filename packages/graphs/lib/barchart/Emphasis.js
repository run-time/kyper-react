import React, { useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTokens } from '@kyper/tokenprovider'

const propTypes = {
  delay: PropTypes.number,
  enableAnimations: PropTypes.bool,
  r: PropTypes.number.isRequired,
  w: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
}

export const Emphasis = ({ delay, enableAnimations, r, w, x, y }) => {
  const [opacity, setOpacity] = useState(enableAnimations ? 0 : 1)
  const tokens = useTokens()
  const width = w / 2

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity(1)
    }, delay + 1000) // We want to make sure this pops after it's been animated

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  // Are we going to allow emphasis on a negative value? The path data will have to change if so.
  return (
    <path
      aria-hidden={true}
      d={`M${x + width},${y}h${width - r}a${r},${r} 0 0 1 ${r},${r}v${width - r} Z`}
      style={{ fill: tokens.Color.Error200, opacity, transition: 'opacity .2s' }}
    />
  )
}

Emphasis.propTypes = propTypes
