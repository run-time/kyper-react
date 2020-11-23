import PropTypes from 'prop-types'
import React from 'react'
import { css } from 'glamor'
import { Checkmark } from '@kyper/icon'
import { useTokens } from '@kyper/tokenprovider'

import { LEFT, ToggleBase } from './ToggleBase'

export const CheckBox = ({ labelPosition = LEFT, size = 16, ...rest }) => {
  const isLabelLeft = labelPosition === LEFT
  const tokens = useTokens()
  const styles = getStyles(tokens, size, isLabelLeft)

  return (
    <ToggleBase
      inputType="checkbox"
      labelPosition={labelPosition}
      size={size}
      styles={styles}
      {...rest}
    >
      <Checkmark
        color={
          rest.disabled ? tokens.BorderColor.CheckboxDisabled : tokens.BorderColor.CheckboxChecked
        }
        size={size}
        styles={styles.svg}
      />
    </ToggleBase>
  )
}

const getStyles = (tokens, size, isLabelLeft) => ({
  container: css({
    ' > input + label:before': {
      boxSizing: 'border-box',
      border: `1px solid ${tokens.BorderColor.Checkbox}`,
      borderRadius: tokens.BorderRadius.Checkbox,
      content: `" "`, // glamor hack
      height: size,
      left: isLabelLeft ? null : 0,
      right: isLabelLeft ? 0 : null,
      position: 'absolute',
      top: 0,
      width: size,
    },
    ' > input:checked + label svg': {
      opacity: '1 !important',
    },
    ' > input:checked + label:before': {
      backgroundColor: tokens.BackgroundColor.CheckboxChecked,
      borderColor: tokens.BorderColor.CheckboxChecked,
    },
    ' > input:disabled + label:before': {
      backgroundColor: tokens.BackgroundColor.CheckboxDisabled,
      borderColor: tokens.BorderColor.CheckboxDisabled,
    },
    ' > input:focus + label:before': {
      boxShadow: tokens.BoxShadow.FocusRingDefault,
    },
  }),
  svg: {
    opacity: 0,
    height: size,
    width: size,
    position: 'absolute',
    top: 0,
    left: isLabelLeft ? null : 0,
    right: isLabelLeft ? 0 : null,
    transition: 'opacity 0.1s ease-in-out',
  },
})

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
}
