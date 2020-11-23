import PropTypes from 'prop-types'
import React from 'react'
import { css } from 'glamor'
import { useTokens } from '@kyper/tokenprovider'

import { LEFT, ToggleBase } from './ToggleBase'

export const Radio = ({ labelPosition = LEFT, size = 16, ...rest }) => {
  const isLabelLeft = labelPosition === LEFT
  const tokens = useTokens()
  const styles = getStyles(tokens, size, isLabelLeft)

  return (
    <ToggleBase
      inputType="radio"
      labelPosition={labelPosition}
      size={size}
      styles={styles}
      {...rest}
    />
  )
}

const getStyles = (tokens, size, isLabelLeft) => ({
  container: css({
    '> input + label': {
      display: 'inline-block',
    },
    '> input, > input + label:before, > input + label:after': {
      borderRadius: '100%',
      content: `" "`, // glamor hack
      border: '1px solid',
      height: size,
      left: isLabelLeft ? null : 0,
      right: isLabelLeft ? 0 : null,
      position: 'absolute',
      width: size,
      boxSizing: 'border-box',
    },
    ' > input + label:after': {
      borderColor: tokens.BorderColor.Radio,
    },
    ' > input + label:before': {
      borderColor: 'transparent',
      boxShadow: '0 0 0 0px rgba(0,0,0,0)',
    },
    ' > input:checked ~ label:before': {
      borderColor: 'transparent',
      boxShadow: `0 0 0 1px ${tokens.BorderColor.RadioChecked}`,
      backgroundColor: tokens.BackgroundColor.RadioDot,
    },
    ' > input:focus ~ label:before': {
      borderColor: 'transparent',
      boxShadow: tokens.BoxShadow.FocusRingDefault,
    },
    ' > input:checked ~ label:after': {
      borderColor: tokens.BackgroundColor.RadioChecked,
      borderWidth: 4,
      boxShadow: `inset 0 0 0 5px ${tokens.BackgroundColor.RadioDotChecked}`,
      // fills it with the primary color if it's a larger size essentially
      backgroundColor: tokens.BorderColor.RadioChecked,
    },
    ' > input:disabled ~ label:before': {
      boxShadow: 'none',
      backgroundColor: tokens.BackgroundColor.RadioDotDisabled,
    },
    ' > input:disabled ~ label:after': {
      borderColor: tokens.BorderColor.RadioDisabled,
    },
    ' > input:checked:disabled ~ label:before': {
      borderColor: 'transparent',
      boxShadow: `0 0 0 1px ${tokens.BorderColor.RadioDisabledChecked}`,
      backgroundColor: tokens.BackgroundColor.RadioDotDisabled,
    },
    ' > input:checked:disabled ~ label:after': {
      borderColor: tokens.BackgroundColor.RadioDotDisabled,
      borderWidth: 4,
      boxShadow: `inset 0 0 0 5px ${tokens.BackgroundColor.RadioDotDisabledChecked}`,
      // fills it with the primary color if it's a larger size essentially
      backgroundColor: tokens.BorderColor.RadioChecked,
    },
  }),
})

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
}
