import React from 'react'
import PropTypes from 'prop-types'

const defaultProps = {
  ariaLabel: 'Graphic',
  aspectRatio: 'xMinYMin meet',
  height: 300,
  width: 500,
}

const propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  aspectRatio: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export const Graph = ({ ariaLabel, aspectRatio, children, height, width, ...rest }) => {
  return (
    <svg
      aria-label={ariaLabel}
      height={height}
      preserveAspectRatio={aspectRatio}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children}
    </svg>
  )
}

Graph.defaultProps = defaultProps
Graph.propTypes = propTypes
