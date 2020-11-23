import React, { useState } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { makeDecorator, useChannel } from '@storybook/addons'
import { TokenProvider, useTokens } from '@kyper/tokenprovider'
import { targets, light, dark } from 'mx-design-tokens'

const AppWrapper = ({ children }) => {
  const tokens = useTokens()
  const bgColor = useDarkMode() ? dark.BackgroundColor.Body : light.BackgroundColor.Body

  return <div style={{ backgroundColor: bgColor }}>{children}</div>
}

export default makeDecorator({
  name: 'withDesignTokens',
  wrapper: (getStory, context, { parameters }) => {
    const currentMode = useDarkMode() ? 'dark' : 'light'
    const defaultTokens =
      currentMode === 'dark'
        ? {
            mode: 'dark',
            tokens: { ...dark },
          }
        : {
            mode: 'light',
            tokens: { ...light },
          }

    const [scheme, setScheme] = useState(defaultTokens)
    const emit = useChannel({
      ['token/toggle']: scheme => {
        setScheme(scheme)
      },
    })

    const customStyles = {
      boldFont: scheme.tokens.Font.Bold,
      brand100: scheme.tokens.Color.Brand100,
      brand200: scheme.tokens.Color.Brand200,
      brand300: scheme.tokens.Color.Brand300,
      brand400: scheme.tokens.Color.Brand400,
      brand500: scheme.tokens.Color.Brand500,
      regularFont: scheme.tokens.Font.Regular,
      semiboldFont: scheme.tokens.Font.Semibold,
    }

    return (
      <TokenProvider scheme={scheme.mode} {...customStyles} target={targets.REACT}>
        <AppWrapper>{getStory(context)}</AppWrapper>
      </TokenProvider>
    )
  },
})
