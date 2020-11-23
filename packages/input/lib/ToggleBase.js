import PropTypes from 'prop-types'
import React, { forwardRef, useRef } from 'react'
import { css } from 'glamor'
import { useTokens } from '@kyper/tokenprovider'

export const LEFT = 'left'
export const RIGHT = 'right'

export const ToggleBase = forwardRef(
  ({ children, id, inputType, label, labelPosition = RIGHT, size = 16, styles, ...rest }, ref) => {
    const isLabelLeft = labelPosition === LEFT
    const inputRef = ref || useRef()
    const tokens = useTokens()

    const baseStyles = getBaseStyles(tokens, size, isLabelLeft)

    return (
      <div className={`${styles.container} ${baseStyles.container}`}>
        <input id={id} ref={inputRef} type={inputType} {...rest} />
        <label className={styles.label} htmlFor={id} style={{ cursor: 'pointer' }}>
          {label}
          {children}
        </label>
      </div>
    )
  },
)

const getBaseStyles = (tokens, size, isLabelLeft) => ({
  container: css({
    position: 'relative',
    ' > input': {
      apperance: 'none',
      background: 'none',
      height: size,
      left: isLabelLeft ? null : 0,
      right: isLabelLeft ? 0 : null,
      opacity: '.00001', // a11y
      position: 'absolute',
      top: 0,
      width: size,
      zIndex: 2,
      margin: 0,
      padding: 0,
    },
    ' > input + label': {
      color: tokens.TextColor.InputLabel,
      height: size,
      display: 'flex',
      alignItems: 'center',
      fontSize: tokens.FontSize.InputLabel,
      lineHeight: tokens.LineHeight.Small,
      marginRight: isLabelLeft ? size + tokens.Spacing.CheckboxLabelMarginRight : 0,
      marginLeft: isLabelLeft ? 0 : size + tokens.Spacing.CheckboxLabelMarginLeft,
      zIndex: 1,
    },
    ' > input:disabled + label': {
      color: tokens.TextColor.Disabled,
    },
  }),
})

export const baseProps = {
  id: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.string,
  size: PropTypes.number,
  styles: PropTypes.object,
}

ToggleBase.propTypes = baseProps

ToggleBase.displayName = 'ToggleBase'
