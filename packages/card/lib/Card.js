import React from 'react'
import PropTypes from 'prop-types'
import { useTokens } from '@kyper/tokenprovider'

export const BORDER_RADIUS = {
  CARD: 'card', // 4px
  NONE: 'none',
}

export const PADDING = {
  SMALL: 'small', // 16px
  LARGE: 'large', // 24px
  NONE: 'none',
}

const propTypes = {
  borderRadius: PropTypes.oneOf([BORDER_RADIUS.CARD, BORDER_RADIUS.NONE]),
  children: PropTypes.any.isRequired,
  padding: PropTypes.oneOf([PADDING.SMALL, PADDING.LARGE, PADDING.NONE]),
  style: PropTypes.object,
}

const defaultProps = {
  padding: PADDING.LARGE,
  borderRadius: BORDER_RADIUS.CARD,
}

export const Card = ({ children, padding, borderRadius, style, ...rest }) => {
  const tokens = useTokens()
  const styles = getStyles(tokens, padding, borderRadius)

  return (
    <div style={{ ...styles, ...style }} {...rest}>
      {children}
    </div>
  )
}

const getBorderRadius = (tokens, size) => {
  switch (size) {
    case BORDER_RADIUS.CARD:
      return tokens.BorderRadius.Card

    case BORDER_RADIUS.NONE:
      return '0px'

    default:
      return tokens.BorderRadius.Card
  }
}

const getPadding = (tokens, size) => {
  switch (size) {
    case PADDING.SMALL:
      return tokens.Spacing.CardSidePadding

    case PADDING.LARGE:
      return tokens.Spacing.Large

    case PADDING.NONE:
      return 0

    default:
      return tokens.Spacing.Large
  }
}

const getStyles = (tokens, padding, borderRadius) => ({
  padding: getPadding(tokens, padding),
  borderRadius: getBorderRadius(tokens, borderRadius),
  boxShadow: tokens.BoxShadow.Card,
  backgroundColor: tokens.BackgroundColor.Card,
  fontFamily:
    'ProximaNova, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
  color: tokens.TextColor.Default,
})

Card.defaultProps = defaultProps
Card.displayName = 'Card'
Card.propTypes = propTypes
