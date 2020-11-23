import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { Button } from '@kyper/button'
import { CheckCircleFilled, Close, CloseFilled, HelpFilled } from '@kyper/icon'
import { Text } from '@kyper/text'
import { useTokens } from '@kyper/tokenprovider'

export const VARIANTS = {
  ERROR: 'error',
  HELP: 'help',
  SUCCESS: 'success',
}

export function MessageBox({
  children,
  className = '',
  onClose,
  style,
  title,
  variant = VARIANTS.HELP,
}) {
  const tokens = useTokens()
  const styles = getStyles(tokens, variant)

  return (
    <div className={`${styles.messageBox} ${className}`} style={style}>
      {variant === VARIANTS.ERROR && (
        <CloseFilled color={tokens.BackgroundColor.MessageBoxError} style={styles.icon} />
      )}
      {variant === VARIANTS.HELP && (
        <HelpFilled color={tokens.BackgroundColor.MessageBoxHelp} style={styles.icon} />
      )}
      {variant === VARIANTS.SUCCESS && (
        <CheckCircleFilled color={tokens.BackgroundColor.MessageBoxSuccess} style={styles.icon} />
      )}
      <div style={styles.content}>
        {title && (
          <Text as="Body" style={styles.title} tag="span">
            {title}
          </Text>
        )}
        {children}
      </div>
      {onClose && (
        <Button
          aria-label="Close message"
          id="message-close"
          onClick={onClose}
          style={styles.closeButton}
          variant="transparent"
        >
          <Close />
        </Button>
      )}
    </div>
  )
}

const getStyles = (tokens, variant) => ({
  messageBox: css({
    display: 'flex',
    backgroundColor: tokens.BackgroundColor.MessageBox,
    boxShadow: tokens.BoxShadow.Container,
    borderRadius: tokens.BorderRadius.Card,
    borderLeft: '4px solid',
    ...(variant === VARIANTS.ERROR && {
      borderColor: tokens.BackgroundColor.MessageBoxError,
    }),
    ...(variant === VARIANTS.HELP && {
      borderColor: tokens.BackgroundColor.MessageBoxHelp,
    }),
    ...(variant === VARIANTS.SUCCESS && {
      borderColor: tokens.BackgroundColor.MessageBoxSuccess,
    }),
    padding: `${tokens.Spacing.Small}px ${tokens.Spacing.Small}px ${tokens.Spacing.Small}px ${tokens.Spacing.XSmall}px`,
    ' #message-close': {
      [`@media(max-width: ${tokens.MediaQuery.Med})`]: {
        padding: '22px 14px!important',
        margin: '-12px -12px -12px 0',
      },
    },
  }),
  icon: {
    flexShrink: 0,
    margin: `1px ${tokens.Spacing.XSmall}px 1px 0`,
  },
  closeButton: {
    padding: '0 2px',
    height: 20,
    marginLeft: tokens.Spacing.Small,
  },
  title: {
    fontWeight: tokens.FontWeight.Semibold,
    display: 'block',
  },
  content: {
    flexGrow: 1,
  },
})

MessageBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  onClose: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.string,
  variant: PropTypes.oneOf([VARIANTS.ERROR, VARIANTS.HELP, VARIANTS.SUCCESS]),
}
