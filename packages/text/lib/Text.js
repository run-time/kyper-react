import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { useTokens } from '@kyper/tokenprovider'

export const TEXT_STYLE = {
  BODY: 'Body',
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  PARAGRAPH: 'Paragraph',
  PARAGRAPH_SMALL: 'ParagraphSmall',
  SMALL: 'Small',
  XSMALL: 'XSmall',
  TINY: 'Tiny',
}

export const TEXT_COLOR = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ERROR: 'error',
}

export const TAG = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  P: 'p',
  SPAN: 'span',
  STRONG: 'strong',
}

const tagMapper = {
  h1: 'H1',
  h2: 'H2',
  h3: 'H3',
  p: 'Paragraph',
  span: 'Paragraph',
  strong: 'Paragraph',
}

export function Text({
  as,
  bold = false,
  children,
  className,
  color = 'primary',
  tag: Element = 'span',
  uppercase = false,
  ...rest
}) {
  const tokens = useTokens()
  const componentAs = as ? as : tagMapper[Element]
  const styles = getStyles(tokens, componentAs)

  return (
    <Element
      className={`${styles.wrapper} ${componentAs ? componentAs : ''} ${
        bold ? 'bold' : ''
      } ${color} ${uppercase ? 'uppercase' : ''} ${className ? className : ''}`}
      {...rest}
    >
      {children}
    </Element>
  )
}

const getStyles = (tokens, as) => ({
  wrapper: css({
    margin: 0,
    fontFamily: `'Proxima Nova', sans-serif`,
    fontSize: tokens.FontSize[as],
    lineHeight: tokens.LineHeight[as],
    fontWeight:
      as === 'H1' || as === 'H2' || as === 'H3'
        ? tokens.FontWeight.Bold
        : tokens.FontWeight.Regular,
    color: tokens.TextColor.Default,
    '.bold, & strong': {
      fontWeight: tokens.FontWeight.Semibold,
    },
    '.uppercase': {
      textTransform: 'uppercase',
      '.Small': {
        letterSpacing: tokens.LetterSpacing.SmallUppercase,
      },
      '.XSmall': {
        letterSpacing: tokens.LetterSpacing.XSmallUppercase,
      },
      '.Tiny': {
        letterSpacing: tokens.LetterSpacing.TinyUppercase,
      },
    },
    '.secondary': {
      color: tokens.TextColor.Secondary,
    },
    '.error': {
      color: tokens.TextColor.Error,
    },
  }),
})

Text.propTypes = {
  as: PropTypes.oneOf([
    TEXT_STYLE.BODY,
    TEXT_STYLE.H1,
    TEXT_STYLE.H2,
    TEXT_STYLE.H3,
    TEXT_STYLE.PARAGRAPH,
    TEXT_STYLE.PARAGRAPH_SMALL,
    TEXT_STYLE.SMALL,
    TEXT_STYLE.XSMALL,
    TEXT_STYLE.TINY,
  ]),
  bold: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  color: PropTypes.oneOf([TEXT_COLOR.PRIMARY, TEXT_COLOR.SECONDARY, TEXT_COLOR.ERROR]),
  tag: PropTypes.oneOf([TAG.H1, TAG.H2, TAG.H3, TAG.P, TAG.SPAN, TAG.STRONG]),
  uppercase: PropTypes.bool,
}
