import React, { forwardRef, useRef } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { useTokens } from '@kyper/tokenprovider'
import { AttentionOutline, CloseFilled } from '@kyper/icon'

export const TextArea = forwardRef(
  (
    {
      description,
      disabled = false,
      errorText,
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
    const textareaRef = ref || useRef()
    const textareaId = id || name

    return (
      <div
        className={`${styles.container} ${errorText ? 'error' : ''} ${disabled ? 'disabled' : ''}`}
      >
        <Label id={textareaId} label={label} styles={styles} />
        <textarea
          aria-describedby={`${textareaId}-description ${textareaId}-error`}
          aria-invalid={!!errorText}
          autoComplete="off"
          className={`${styles.textarea}`}
          disabled={disabled}
          id={textareaId}
          name={name}
          ref={textareaRef}
          type="text"
          {...rest}
        />
        {errorText ? (
          <p
            id={`${textareaId}-error`}
            style={{ ...styles.textContainer, ...styles.errorContainer }}
          >
            {showErrorIcon ? (
              <span style={styles.textIconContainer}>
                <CloseFilled color={tokens.TextColor.Error} size={12} />
              </span>
            ) : null}
            {errorText}
          </p>
        ) : null}
        {description && !errorText ? (
          <p id={`${textareaId}-description`} style={styles.textContainer}>
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
      '.disabled textarea': {
        backgroundColor: tokens.BackgroundColor.InputDisabled,
        borderColor: tokens.BorderColor.InputDisabled,
        pointerEvents: 'none',
        color: tokens.TextColor.Disabled,
      },
      '.disabled label': {
        color: `${tokens.TextColor.Disabled} !important`,
      },
      '.error textarea': {
        border: `1px solid ${tokens.BorderColor.InputError} !important`,
        ':focus': {
          boxShadow: `0px 0px 0px 2px ${tokens.BorderColor.InputError} !important`,
        },
      },
      '.error label': {
        color: `${tokens.TextColor.Error} !important`,
      },
    }),
    textarea: css({
      width: '100%',
      boxSizing: 'border-box',
      boxShadow: `0px 0px 0px 0px ${tokens.BorderColor.InputHover}`,
      color: tokens.TextColor.Default,
      borderRadius: tokens.BorderRadius.Input,
      border: `1px solid ${tokens.BorderColor.Input}`,
      backgroundColor: 'transparent',
      fontSize: tokens.FontSize.Input,
      transition: `box-shadow 350ms ${tokens.Easing.Default}`,
      // Top is the only unique value when there is a label.
      padding: tokens.Spacing.TextAreaPadding,
      lineHeight: tokens.LineHeight.Body,
      ':focus': {
        outline: 'none',
        border: `1px solid ${tokens.BorderColor.InputFocus}`,
        boxShadow: `0px 0px 0px 2px ${tokens.BorderColor.InputFocus} !important`,
      },
      ':hover': {
        boxShadow: `0px 0px 0px 1px ${tokens.BorderColor.InputHover}`,
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

TextArea.propTypes = {
  description: PropTypes.string,
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
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

TextArea.displayName = 'TextArea'

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
