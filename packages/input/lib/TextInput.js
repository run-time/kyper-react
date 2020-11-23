import React, { forwardRef, useRef } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { useTokens } from '@kyper/tokenprovider'
import { AttentionOutline, CloseFilled } from '@kyper/icon'

const INPUT_HEIGHT = 48

export const TextInput = forwardRef(
  (
    {
      description,
      disabled = false,
      error,
      iconLeft,
      iconRight,
      id,
      label,
      name,
      showDescriptionIcon,
      showErrorIcon,
      showSecondaryLabelBackground = false,
      ...rest
    },
    ref,
  ) => {
    const tokens = useTokens()
    const styles = getStyles(tokens, label, showSecondaryLabelBackground)
    const inputRef = ref || useRef()
    const inputId = id || name

    return (
      <div className={`${styles.container} ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}>
        <Label id={inputId} label={label} styles={styles} />
        <input
          aria-describedby={`${inputId}-description ${inputId}-error`}
          aria-invalid={!!error}
          autoComplete="off"
          className={`${styles.input} ${iconLeft ? 'icon-left' : ''} ${
            iconRight ? 'icon-right' : ''
            }`}
          disabled={disabled}
          id={inputId}
          name={name}
          ref={inputRef}
          type="text"
          {...rest}
        />
        {iconLeft ? <span className={`${styles.iconContainer} icon-left`}>{iconLeft}</span> : null}
        {iconRight ? (
          <span className={`${styles.iconContainer} icon-right`}>{iconRight}</span>
        ) : null}
        {error ? (
          <p id={`${inputId}-error`} style={{ ...styles.textContainer, ...styles.errorContainer }}>
            {showErrorIcon ? (
              <span style={styles.textIconContainer}>
                <CloseFilled color={tokens.TextColor.Error} size={12} />
              </span>
            ) : null}
            {error}
          </p>
        ) : null}
        {description && !error ? (
          <p id={`${inputId}-description`} style={styles.textContainer}>
            {showDescriptionIcon ? (
              <span style={styles.textIconContainer}>
                <AttentionOutline color={tokens.TextColor.InputLabel} size={12} />
              </span>
            ) : null}
            {description}
          </p>
        ) : null}
      </div>
    )
  },
)

const getStyles = (tokens, label, showSecondaryLabelBackground) => {
  // TODO: Add fonts
  return {
    container: css({
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative',
      fontFamily:
        'ProximaNova, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
      '.disabled': {
        cursor: 'not-allowed',
      },
      '.disabled input': {
        backgroundColor: tokens.BackgroundColor.InputDisabled,
        borderColor: tokens.BorderColor.InputDisabled,
        pointerEvents: 'none',
        color: tokens.TextColor.Disabled,
      },
      '.disabled label': {
        color: `${tokens.TextColor.Disabled} !important`,
      },
      '.error input': {
        border: `1px solid ${tokens.BorderColor.InputError} !important`,
        ':focus': {
          boxShadow: `0px 0px 0px 2px ${tokens.BorderColor.InputError} !important`,
        },
      },
      '.error label': {
        color: `${tokens.TextColor.Error} !important`,
      },
    }),
    input: css({
      width: '100%',
      height: INPUT_HEIGHT,
      boxSizing: 'border-box',
      boxShadow: `0px 0px 0px 0px ${tokens.BorderColor.InputHover}`,
      color: tokens.TextColor.Default,
      borderRadius: tokens.BorderRadius.Input,
      border: `1px solid ${tokens.BorderColor.Input}`,
      backgroundColor: 'transparent',
      fontSize: tokens.FontSize.Input,
      transition: `box-shadow 350ms ${tokens.Easing.Default}`,
      // Top is the only unique value when there is a label.
      padding: tokens.Spacing.InputPaddingLeft,
      paddingTop: label ? tokens.Spacing.InputPaddingTop : tokens.Spacing.InputPaddingLeft,
      lineHeight: tokens.LineHeight.Body,
      ':focus': {
        outline: 'none',
        border: `1px solid ${tokens.BorderColor.InputFocus}`,
        boxShadow: `0px 0px 0px 2px ${tokens.BorderColor.InputFocus} !important`,
      },
      ':hover': {
        boxShadow: `0px 0px 0px 1px ${tokens.BorderColor.InputHover}`,
      },
      '.icon-left': {
        paddingLeft: 36,
      },
      '.icon-right': {
        paddingRight: 36,
      },
      '::placeholder': {
        color: tokens.TextColor.InputPlaceholder,
      },
    }),
    label: {
      position: 'absolute',
      top: `${tokens.Spacing.InputLabelTop}px`,
      left: tokens.Spacing.InputLabelMarginLeft,
      fontSize: tokens.FontSize.InputLabel,
      paddingLeft: tokens.Spacing.InputLabelPaddingLeft,
      paddingRight: tokens.Spacing.InputLabelPaddingRight,
      backgroundColor: showSecondaryLabelBackground
        ? tokens.BackgroundColor.InputLabelSecondary
        : tokens.BackgroundColor.InputLabelDefault,
      color: tokens.TextColor.InputLabel,
      lineHeight: tokens.LineHeight.Small,
    },
    iconContainer: css({
      position: 'absolute',
      top: 0,
      left: 12,
      right: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '.icon-left': {
        ...(label ? { top: tokens.Spacing.InputPaddingTop + 2 } : { height: INPUT_HEIGHT }),
      },
      '.icon-right': {
        left: 'auto',
        right: 12,
        height: INPUT_HEIGHT,
      },
    }),
    textContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: tokens.Spacing.Tiny,
      fontSize: tokens.FontSize.InputLabel,
      lineHeight: tokens.LineHeight.Small,
      color: tokens.TextColor.InputLabel,
    },
    errorContainer: {
      color: tokens.TextColor.Error,
    },
    textIconContainer: {
      display: 'flex',
      alignItems: 'center',
      marginRight: tokens.Spacing.Tiny,
    },
  }
}

TextInput.propTypes = {
  description: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  /**
   * Defaults to the element name if the id isn't present for a11y.
   */
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string.isRequired,
  showDescriptionIcon: PropTypes.bool,
  showErrorIcon: PropTypes.bool,
  showSecondaryLabelBackground: PropTypes.bool,
}

TextInput.displayName = 'TextInput'

// Helper component
const Label = React.memo(function CachedLabel({ id, label, styles }) {
  if (!label) return null

  // apply consistent style while allowing additional control of the label
  if (typeof label === 'object') {
    return React.cloneElement(label, { htmlFor: id, style: styles.label })
  }

  return (
    <label htmlFor={id} style={styles.label}>
      {label}
    </label>
  )
})

Label.propTypes = {
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  styles: PropTypes.object,
}
