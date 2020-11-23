import React from 'react'
import { useSelect } from 'downshift'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { useTokens } from '@kyper/tokenprovider'
import { AttentionOutline, ChevronDown, ChevronUp, CloseFilled } from '@kyper/icon'

import { SelectDropDown } from './SelectDropDown'

const propTypes = {
  description: PropTypes.string,
  dropDownProps: PropTypes.object,
  errorText: PropTypes.string,
  initialSelectedItem: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  isDisabled: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  showDescriptionIcon: PropTypes.bool,
  showErrorIcon: PropTypes.bool,
  showSecondaryLabelBackground: PropTypes.bool,
}
const defaultProps = {
  dropDownProps: {},
  label: 'Dropdown',
}

export const Select = ({
  description,
  dropDownProps,
  errorText,
  initialSelectedItem,
  isDisabled,
  items,
  label,
  onChange,
  showSecondaryLabelBackground,
  showDescriptionIcon,
  showErrorIcon,
}) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    initialSelectedItem,
    itemToString: item => (item === null ? '' : String(item.label)),
    onSelectedItemChange: ({ selectedItem }) => {
      onChange(selectedItem)
    },
  })
  const tokens = useTokens()
  const styles = getStyles(tokens, showSecondaryLabelBackground)
  const buttonProps = getToggleButtonProps({ disabled: isDisabled })

  return (
    <div
      className={`${styles.container} ${errorText ? 'error' : ''} ${isDisabled ? 'disabled' : ''}`}
    >
      <label {...getLabelProps()} style={styles.label}>
        {label}
      </label>
      <button
        aria-describedby={`${buttonProps.id}-error ${buttonProps.id}-description`}
        aria-invalid={!!errorText}
        className={`${styles.button} ${!selectedItem ? 'placeholder' : ''}`}
        {...buttonProps}
      >
        <span>{(selectedItem && selectedItem.label) || 'Select a value'}</span>
        <span style={styles.iconContainer}>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </button>
      <SelectDropDown
        getItemProps={getItemProps}
        getMenuProps={getMenuProps}
        highlightedIndex={highlightedIndex}
        isOpen={isOpen}
        items={items}
        {...dropDownProps}
      />
      {errorText ? (
        <p
          id={`${buttonProps.id}-error`}
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
        <p id={`${buttonProps.id}-description`} style={styles.textContainer}>
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
}

const getStyles = (tokens, showSecondaryLabelBackground) => {
  return {
    container: css({
      width: '100%',
      position: 'relative',
      fontFamily: tokens.Font.Regular,
      boxSizing: 'border-box',
      '.disabled': {
        cursor: 'not-allowed',
      },
      '.disabled button': {
        backgroundColor: tokens.BackgroundColor.InputDisabled,
        borderColor: tokens.BorderColor.InputDisabled,
        pointerEvents: 'none',
        color: tokens.TextColor.Disabled,
      },
      '.disabled label': {
        color: `${tokens.TextColor.Disabled} !important`,
      },
      '.error button': {
        border: `1px solid ${tokens.BorderColor.InputError} !important`,
        ':focus': {
          boxShadow: `0px 0px 0px 2px ${tokens.BorderColor.InputError} !important`,
        },
      },
      '.error label': {
        color: `${tokens.TextColor.Error} !important`,
      },
    }),
    button: css({
      width: '100%',
      height: 48,
      boxSizing: 'border-box',
      textAlign: 'left',
      color: tokens.TextColor.Default,
      borderRadius: tokens.BorderRadius.Input,
      border: `1px solid ${tokens.BorderColor.Input}`,
      backgroundColor: 'transparent',
      paddingLeft: tokens.Spacing.InputPaddingLeft,
      paddingTop: tokens.Spacing.InputPaddingTop,
      paddingRight: 36,
      paddingBottom: tokens.Spacing.InputPaddingBottom,
      fontSize: tokens.FontSize.Input,
      lineHeight: tokens.LineHeight.Body,
      ':focus': {
        outline: 'none',
        border: `1px solid ${tokens.BorderColor.InputFocus}`,
        boxShadow: `0px 0px 0px 2px ${tokens.BorderColor.InputFocus} !important`,
      },
      ':hover': {
        boxShadow: `0px 0px 0px 1px ${tokens.BorderColor.InputHover}`,
      },
      '&.placeholder': {
        color: tokens.TextColor.InputPlaceholder,
      },
      // Button text
      '& span:first-of-type': {
        display: 'block',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
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
    iconContainer: {
      position: 'absolute',
      top: 18,
      right: 12,
      left: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
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

Select.propTypes = propTypes
Select.defaultProps = defaultProps
