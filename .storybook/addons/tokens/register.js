import React, { useEffect, useState } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { DarkModeIcon, LightModeIcon } from './ThemeIcons'
import { addons, types } from '@storybook/addons'
import { useAddonState, useChannel } from '@storybook/api'
import { AddonPanel } from '@storybook/components'
import { STORY_CHANGED } from '@storybook/core-events'
import { FlexContainer } from '../blocks/blocks'
import { light, dark } from 'mx-design-tokens'

// TODO: use kyper toggle button when available
const ToggleButton = ({ clickHandler, label }) => {
  const c = useDarkMode() ? 'white' : 'black'
  const buttonStyles = {
    background: 'transparent',
    border: `1px solid ${c}`,
    borderRadius: 16,
    color: c,
    fontSize: 17,
    height: 32,
    lineHeight: '15px',
    padding: '6px 16px',
    position: 'relative',
    top: -4,
  }

  return (
    <button onClick={clickHandler} style={buttonStyles}>
      {label}
    </button>
  )
}

const TokenSchemeTitle = ({ clickHandler, modeLabel }) => {
  const label = useDarkMode() ? 'Dark Mode Design Tokens' : 'Light Mode Design Tokens'

  return (
    <FlexContainer padding={4}>
      {useDarkMode() ? <DarkModeIcon /> : <LightModeIcon />}
      <h2 style={{ lineHeight: '24px' }}>{label}</h2>
      <ToggleButton clickHandler={clickHandler} label={modeLabel} />
    </FlexContainer>
  )
}

const ADDON_ID = 'designtokens'
const PARAM_KEY = 'designTokens'
const PANEL_ID = `${ADDON_ID}/panel`

const TokenPanel = () => {
  const [viewModeAll, setViewModeAll] = useState(false)

  const TokenTextPlayground = () => {
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

    const [scheme, setScheme] = useAddonState(ADDON_ID, defaultTokens)

    if (scheme.mode !== currentMode) {
      setScheme(defaultTokens)
    }

    // Keep switching stories in sync with the current scheme.
    const emit = useChannel({
      [STORY_CHANGED]: () => {
        emit('token/toggle', scheme)
      },
    })

    useEffect(() => {
      emit('token/toggle', scheme)
    }, [scheme])

    const updateTokens = (currentMode, e) => {
      try {
        const updatedTokens = { ...scheme.tokens, ...JSON.parse(e.target.value) }

        // if JSON is valid then update state
        const newScheme = {
          mode: currentMode,
          tokens: { ...updatedTokens },
        }

        setScheme(newScheme)
      } catch (e) {
        return
      }
    }
    const styles = {
      margin: '0 20px',
      width: 'calc(100% - 40px)',
      height: 300,
      border: '2px solid rgba(0,0,0,0.3)',
      padding: 8,
      fontFamily: 'monospace',
      fontSize: 16,
    }
    const customTokens = {
      ...{
        Color: {
          Brand100: scheme.tokens.Color.Brand100,
          Brand200: scheme.tokens.Color.Brand200,
          Brand300: scheme.tokens.Color.Brand300,
          Brand400: scheme.tokens.Color.Brand400,
          Brand500: scheme.tokens.Color.Brand500,
        },
      },
      ...{
        Font: { ...scheme.tokens.Font },
      },
    }
    const cleansedTokens = viewModeAll
      ? JSON.stringify(scheme.tokens, null, 2)
      : JSON.stringify(customTokens, null, 2)

    return (
      <textarea
        style={styles}
        onChange={e => updateTokens(currentMode, e)}
        defaultValue={cleansedTokens}
      />
    )
  }

  return (
    <div style={{ padding: 20 }}>
      <TokenSchemeTitle
        clickHandler={() => {
          setViewModeAll(!viewModeAll)
        }}
        modeLabel={viewModeAll ? 'all' : 'custom'}
      />
      <TokenTextPlayground />
    </div>
  )
}

addons.register(ADDON_ID, api => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <TokenPanel />
    </AddonPanel>
  )
  const title = 'Design Tokens'

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
    paramKey: PARAM_KEY,
  })
})
