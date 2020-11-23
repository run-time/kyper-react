import React from 'react'
import PropTypes from 'prop-types'

import { useTokens } from '@kyper/tokenprovider'

export const SvgIcon = ({
  backgroundColor,
  children,
  color,
  height,
  size,
  styles,
  viewBox,
  width,
  ...rest
}) => {
  const tokens = useTokens()
  const updatedColor = color || tokens.TextColor.Default
  const updatedBgColor = backgroundColor || 'none'

  return (
    <svg
      aria-hidden={true}
      className="mx-icon"
      focusable={false}
      height={height || size}
      style={styles}
      viewBox={viewBox}
      width={width || size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children({
        backgroundColor: updatedBgColor,
        color: updatedColor,
      })}
    </svg>
  )
}

SvgIcon.defaultProps = {
  size: 16,
  viewBox: '0 0 16 16',
}

SvgIcon.propTypes = {
  /**
   * Certain Icons may support a background color for contrast.
   */
  backgroundColor: PropTypes.string,
  /**
   * Any valid color for the SVG `fill` attribute
   */
  color: PropTypes.string,
  /**
   *  Icons that aren't square require a height and width if you want to change the size.
   */
  height: PropTypes.number,
  size: PropTypes.number,
  /**
   * Styles object will be applied to the SVG element
   */
  styles: PropTypes.object,
  viewBox: PropTypes.string,
  /**
   *  Icons that aren't square require a height and width if you want to change the size.
   */
  width: PropTypes.number,
}

export const createSvgIcon = (path, defaultOverrides = {}) => {
  const Icon = props => (
    <SvgIcon {...defaultOverrides} {...props}>
      {path}
    </SvgIcon>
  )

  return React.memo(Icon)
}
