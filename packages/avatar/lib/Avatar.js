import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { useTokens } from '@kyper/tokenprovider'
import { Unlink, Image } from '@kyper/icon'

export const Avatar = ({ children, src, size = 16, alt, ...rest }) => {
  const tokens = useTokens()
  const styles = getStyles(tokens, size)
  const [hasError, setError] = useState(false)
  // Icons don't really match up with the avatar size
  const getIconSize = size => {
    switch (size) {
      case 16:
        return 8
      case 24:
        return 12
      case 32 || 44:
      default:
        return 16
    }
  }
  const iconSize = getIconSize(size)

  if (hasError) {
    return (
      <div
        className={`${styles} avatar-${size}`}
        role="image"
        {...rest}
        aria-label={`${alt || rest.ariaLabel} Broken Image`}
      >
        {children ? children : <Unlink size={iconSize} />}
      </div>
    )
  }

  return (
    <div className={`${styles} avatar-${size}`} {...rest}>
      {!children && src && <img alt={alt} onError={() => setError(true)} src={src} />}
      {children && !src && children}
      {!children && !src && <Image size={iconSize} />}
    </div>
  )
}

const getStyles = (tokens, size) =>
  css({
    width: size,
    height: size,
    lineHeight: tokens.LineHeight.Small,
    backgroundColor: tokens.Color.Neutral300,
    textAlign: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    fontSize: tokens.FontSize.Tiny,
    fontWeight: tokens.FontWeight.Bold,
    color: tokens.TextColor.Avatar,
    overflow: 'hidden',
    '> img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    '.avatar-16': {
      fontSize: tokens.FontSize.Tiny,
    },
    '.avatar-24': {
      fontSize: tokens.FontSize.Body,
    },
    '.avatar-32': {
      fontSize: tokens.FontSize.H3,
    },
    '.avatar-44': {
      fontSize: tokens.FontSize.H2,
    },
  })

Avatar.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.any,
  size: PropTypes.oneOf([16, 24, 32, 44]).isRequired,
  src: PropTypes.string,
}
Avatar.displayName = 'Avatar'
