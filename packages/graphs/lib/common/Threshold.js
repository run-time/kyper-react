import React from 'react'
import PropTypes from 'prop-types'
import { useTokens } from '@kyper/tokenprovider'

const propTypes = {
  margins: PropTypes.object.isRequired,
  threshold: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  yScale: PropTypes.func.isRequired,
}

export const Threshold = ({ margins, threshold, width, yScale }) => {
  const tokens = useTokens()
  const styles = getStyles(tokens)

  return (
    <g transform={`translate(${margins.left},0)`}>
      <line
        aria-hidden={true}
        style={styles}
        x1={0}
        x2={width - margins.left - margins.right}
        y1={yScale(threshold)}
        y2={yScale(threshold)}
      />
    </g>
  )
}

Threshold.propTypes = propTypes

const getStyles = tokens => ({
  stroke: tokens.Color.Neutral600,
  strokeDasharray: '0.1, 5.9',
  strokeWidth: 2,
  strokeLinecap: 'round',
})
