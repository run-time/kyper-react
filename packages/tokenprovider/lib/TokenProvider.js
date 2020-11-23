import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { buildTheme, targets } from 'mx-design-tokens'

const SCHEMES = {
  LIGHT: 'light',
  DARK: 'dark',
}

export const TokenContext = React.createContext(buildTheme(SCHEMES.LIGHT))
export const ReactNativeTokenContext = React.createContext(
  buildTheme(SCHEMES.LIGHT, targets.REACT_NATIVE),
)

export const useTokens = (target = targets.REACT) => {
  const context =
    target === targets.REACT
      ? React.useContext(TokenContext)
      : React.useContext(ReactNativeTokenContext)

  return context ? context : buildTheme(SCHEMES.LIGHT)
}

const propTypes = {
  boldFont: PropTypes.string,
  brand100: PropTypes.string,
  brand200: PropTypes.string,
  brand300: PropTypes.string,
  brand400: PropTypes.string,
  brand500: PropTypes.string,
  regularFont: PropTypes.string,
  scheme: PropTypes.oneOf([SCHEMES.LIGHT, SCHEMES.DARK]),
  semiboldFont: PropTypes.string,
  target: PropTypes.oneOf([targets.REACT, targets.REACT_NATIVE]),
}

const defaultProps = {
  scheme: SCHEMES.LIGHT,
  target: targets.REACT,
}

export const TokenProvider = ({
  children,
  boldFont,
  brand100,
  brand200,
  brand300,
  brand400,
  brand500,
  regularFont,
  scheme,
  semiboldFont,
  target,
}) => {
  const [tokens, setTokens] = useState(buildTheme(scheme, target))

  useEffect(() => {
    const colors = {
      ...(brand100 && { Brand100: brand100 }),
      ...(brand200 && { Brand200: brand200 }),
      ...(brand300 && { Brand300: brand300 }),
      ...(brand400 && { Brand400: brand400 }),
      ...(brand500 && { Brand500: brand500 }),
    }

    const fonts = {
      ...(regularFont && { Regular: regularFont }),
      ...(semiboldFont && { Semibold: semiboldFont }),
      ...(boldFont && { Bold: boldFont }),
    }

    setTokens(buildTheme(scheme, target, colors, fonts))
  }, [
    boldFont,
    brand100,
    brand200,
    brand300,
    brand400,
    brand500,
    regularFont,
    semiboldFont,
    scheme,
    target,
  ])

  if (target === targets.REACT) {
    return <TokenContext.Provider value={tokens}>{children}</TokenContext.Provider>
  } else {
    return (
      <ReactNativeTokenContext.Provider value={tokens}>{children}</ReactNativeTokenContext.Provider>
    )
  }
}

TokenProvider.propTypes = propTypes
TokenProvider.defaultProps = defaultProps
