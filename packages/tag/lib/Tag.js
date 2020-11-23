import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { Text } from '@kyper/text'
import { useTokens } from '@kyper/tokenprovider'

export const SIZES = {
  MEDIUM: 'medium',
  SMALL: 'small',
}

export const VARIANTS = {
  ERROR: 'error',
  NEUTRAL: 'neutral',
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
}

export const Tag = ({ className, size = 'medium', title, variant = 'neutral', ...rest }) => {
  const tokens = useTokens()
  const styles = getStyles(tokens)

  return (
    <div className={`${styles.wrapper} ${size} ${variant} ${className ? className : ''}`} {...rest}>
      <Text as="Tiny" bold={true} className="kyper-tag-title" tag="span" uppercase={true}>
        {title}
      </Text>
    </div>
  )
}

const getStyles = tokens => ({
  wrapper: css({
    display: 'flex',
    padding: `${tokens.Spacing.TagPaddingTopBottom}px ${tokens.Spacing.TagPaddingLeftRight}px`,
    borderRadius: tokens.BorderRadius.XLarge,
    '.kyper-tag-title': {
      fontWeight: tokens.FontWeight.Semibold,
      textTransform: 'uppercase',
      color: tokens.TextColor.Tag,
    },
    '.error': {
      background: tokens.BackgroundColor.TagError,
      '& .kyper-tag-title': {
        color: tokens.TextColor.TagError,
      },
    },
    '.neutral': {
      background: tokens.BackgroundColor.TagNeutral,
      '& .kyper-tag-title': {
        color: tokens.TextColor.TagNeutral,
      },
    },
    '.primary': {
      background: tokens.BackgroundColor.TagPrimary,
      '& .kyper-tag-title': {
        color: tokens.TextColor.TagPrimary,
      },
    },
    '.success': {
      background: tokens.BackgroundColor.TagSuccess,
      '& .kyper-tag-title': {
        color: tokens.TextColor.TagSuccess,
      },
    },
    '.warning': {
      background: tokens.BackgroundColor.TagWarning,
      '& .kyper-tag-title': {
        color: tokens.TextColor.TagWarning,
      },
    },
    '.small': {
      padding: `${tokens.Spacing.TagSmallPaddingTopBottom}px ${tokens.Spacing.TagSmallPaddingLeftRight}px`,
    },
  }),
})

Tag.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf([SIZES.MEDIUM, SIZES.SMALL]),
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    VARIANTS.ERROR,
    VARIANTS.NEUTRAL,
    VARIANTS.PRIMARY,
    VARIANTS.SUCCESS,
    VARIANTS.WARNING,
  ]),
}
