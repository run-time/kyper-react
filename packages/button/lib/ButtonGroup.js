import React from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { useTokens } from '@kyper/tokenprovider'

export const ButtonGroup = ({ children, ...rest }) => {
  const tokens = useTokens()
  const styles = getStyles(tokens)

  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  )
}

const getStyles = tokens =>
  css({
    display: 'flex',
    alignItems: 'center',

    '> button': {
      marginRight: tokens.Spacing.Small,
      '&.kyper-transparent': {
        marginRight: tokens.Spacing.XSmall,
      },
      '&:last-child': {
        marginRight: 0,
      },
    },
  })

ButtonGroup.propTypes = {
  children: PropTypes.any.isRequired,
}

ButtonGroup.displayName = 'ButtonGroup'
