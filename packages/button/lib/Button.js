import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { useTokens } from '@kyper/tokenprovider'

export const buttonVariants = {
  PRIMARY: 'primary',
  NEUTRAL: 'neutral',
  TRANSPARENT: 'transparent',
  TRANSPARENT_TERTIARY: 'transparent-tertiary',
  LINK: 'link',
  LINK_TERTIARY: 'link-tertiary',
  LINK_DESTRUCTIVE: 'link-destructive',
  DESTRUCTIVE: 'destructive',
}

export const buttonSizes = {
  LARGE: 'large',
  SMALL: 'small',
}

export const Button = forwardRef(
  ({ children, disabled, onClick, size, variant = 'neutral', ...rest }, ref) => {
    const tokens = useTokens()
    const styles = getStyles(tokens, disabled, size)

    return (
      <button
        aria-disabled={disabled}
        className={`${styles} kyper-${variant}`}
        onClick={!disabled ? onClick : e => e.preventDefault()}
        ref={ref}
        type="button"
        {...rest}
      >
        {children}
      </button>
    )
  },
)

const getStyles = (tokens, disabled, size) =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: tokens.BorderRadius.Button,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontSize: tokens.FontSize.Button,
    fontWeight: tokens.FontWeight.Semibold,
    fontFamily: tokens.Font.Semibold,
    position: 'relative',
    padding: `0px ${tokens.Spacing.ButtonPadding}px`,
    margin: 0,
    width: 'auto',
    height: '44px',
    transition: `all ${tokens.Time.Short}ms ${tokens.Easing.Default}`,
    ':focus': {
      outline: 'none',
      boxShadow: tokens.BoxShadow.FocusRingDefault,
    },
    [`.kyper-${buttonVariants.PRIMARY}`]: {
      backgroundColor: tokens.BackgroundColor.ButtonPrimary,
      color: tokens.TextColor.ButtonPrimary,
      ':hover': !disabled && {
        backgroundColor: tokens.BackgroundColor.ButtonPrimaryHover,
        color: tokens.TextColor.ButtonPrimary,
      },
      ...(disabled && {
        backgroundColor: tokens.BackgroundColor.ButtonPrimaryDisabled,
        color: tokens.TextColor.ButtonPrimaryDisabled,
      }),
    },
    [`.kyper-${buttonVariants.DESTRUCTIVE}`]: {
      backgroundColor: tokens.BackgroundColor.ButtonDestructive,
      color: tokens.TextColor.ButtonDestructive,
      ':hover': !disabled && {
        backgroundColor: tokens.BackgroundColor.ButtonDestructiveHover,
        color: tokens.TextColor.ButtonDestructive,
      },
      ...(disabled && {
        backgroundColor: tokens.BackgroundColor.ButtonDestructiveDisabled,
        color: tokens.TextColor.ButtonDestructiveDisabled,
      }),
    },
    [`.kyper-${buttonVariants.NEUTRAL}`]: {
      backgroundColor: tokens.BackgroundColor.ButtonNeutral,
      border: '1px solid',
      borderColor: tokens.BorderColor.ButtonNeutral,
      color: tokens.TextColor.ButtonNeutral,
      ':hover': !disabled && {
        color: tokens.TextColor.ButtonNeutralHover,
        backgroundColor: tokens.BackgroundColor.ButtonNeutralHover,
        borderColor: tokens.BorderColor.ButtonNeutralHover,
      },
      ...(disabled && {
        backgroundColor: tokens.BackgroundColor.ButtonNeutralDisabled,
        color: tokens.TextColor.ButtonNeutralDisabled,
      }),
    },
    [`.kyper-${buttonVariants.TRANSPARENT}`]: {
      backgroundColor: 'transparent',
      color: tokens.TextColor.ButtonTransparent,
      ':hover': !disabled && {
        color: tokens.TextColor.ButtonTransparentHover,
        backgroundColor: tokens.BackgroundColor.ButtonTransparentHover,
      },
      ...(disabled && {
        color: tokens.TextColor.ButtonTransparentDisabled,
      }),
    },
    [`.kyper-${buttonVariants.TRANSPARENT_TERTIARY}`]: {
      backgroundColor: 'transparent',
      color: tokens.TextColor.ButtonTransparentTertiary,
      ':hover': !disabled && {
        color: tokens.TextColor.ButtonTransparentHover,
        backgroundColor: tokens.BackgroundColor.ButtonTransparentHover,
      },
      ...(disabled && {
        color: tokens.TextColor.ButtonTransparentDisabled,
      }),
    },
    [`.kyper-${buttonVariants.LINK}`]: {
      backgroundColor: 'transparent',
      color: tokens.TextColor.ButtonLink,
      textDecoration: 'none',
      lineHeight: tokens.LineHeight.Body,
      height: tokens.LineHeight.Body,
      cursor: 'pointer',
      boxSizing: 'border-box',
      borderBottom: '1px solid',
      borderColor: 'transparent',
      borderRadius: '0',
      padding: '0',
      fontSize: size === buttonSizes.SMALL && tokens.FontSize.ButtonLinkSmall,
      ':hover': !disabled && {
        backgroundColor: tokens.BackgroundColor.ButtonLinkHover,
        color: tokens.TextColor.ButtonLinkHover,
        borderColor: tokens.BorderColor.ButtonLinkHover,
        outline: 'none',
      },
      ...(disabled && {
        color: tokens.TextColor.ButtonTransparentDisabled,
      }),
    },
    [`.kyper-${buttonVariants.LINK_TERTIARY}`]: {
      backgroundColor: 'transparent',
      color: tokens.TextColor.ButtonLinkTertiary,
      textDecoration: 'none',
      lineHeight: tokens.LineHeight.Body,
      height: tokens.LineHeight.Body,
      cursor: 'pointer',
      boxSizing: 'border-box',
      borderBottom: '1px solid',
      borderColor: 'transparent',
      borderRadius: '0',
      padding: '0',
      fontSize: size === buttonSizes.SMALL && tokens.FontSize.ButtonLinkSmall,
      ':hover': !disabled && {
        backgroundColor: tokens.BackgroundColor.ButtonLinkHover,
        color: tokens.TextColor.ButtonLinkHover,
        borderColor: tokens.BorderColor.ButtonLinkHover,
        outline: 'none',
      },
      ...(disabled && {
        color: tokens.TextColor.ButtonTransparentDisabled,
      }),
    },
    [`.kyper-${buttonVariants.LINK_DESTRUCTIVE}`]: {
      backgroundColor: 'transparent',
      color: tokens.TextColor.ButtonLinkDestructive,
      textDecoration: 'none',
      lineHeight: tokens.LineHeight.Body,
      height: tokens.LineHeight.Body,
      cursor: 'pointer',
      boxSizing: 'border-box',
      borderBottom: '1px solid',
      borderColor: 'transparent',
      borderRadius: '0',
      padding: '0',
      fontSize: size === buttonSizes.SMALL && tokens.FontSize.ButtonLinkSmall,
      ':hover': !disabled && {
        color: tokens.TextColor.ButtonLinkDestructiveHover,
        borderColor: tokens.BorderColor.ButtonLinkDestructiveHover,
        outline: 'none',
      },
      ...(disabled && {
        color: tokens.TextColor.ButtonTransparentDisabled,
      }),
    },
    ...(disabled && {
      cursor: 'not-allowed',
    }),
  })

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf([buttonSizes.SMALL, buttonSizes.LARGE]),
  variant: PropTypes.oneOf([
    buttonVariants.PRIMARY,
    buttonVariants.DESTRUCTIVE,
    buttonVariants.NEUTRAL,
    buttonVariants.TRANSPARENT,
    buttonVariants.TRANSPARENT_TERTIARY,
    buttonVariants.LINK,
    buttonVariants.LINK_TERTIARY,
    buttonVariants.LINK_DESTRUCTIVE,
  ]),
}

Button.displayName = 'Button'
