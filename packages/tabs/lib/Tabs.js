import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { useTokens } from '@kyper/tokenprovider'

const BORDER_WIDTH = 3

const focusElement = element => {
  if (element && 'focus' in element) {
    element.focus()
  }
}

export const Tabs = ({ isMobile = false, onTabSelect, selectedTabIndex = 0, tabs }) => {
  const tabRefs = tabs.map(() => useRef(null))
  const [selectedTab, setSelectedTab] = useState(selectedTabIndex)
  const tokens = useTokens()
  const styles = getStyles(isMobile, tokens)

  useEffect(() => {
    setSelectedTab(selectedTabIndex)
  }, [selectedTabIndex])

  useEffect(() => {
    focusElement(tabRefs[selectedTab].current)
    onTabSelect(selectedTab)
  }, [selectedTab])

  const onKeyUp = (e, focusedTab) => {
    switch (e.key) {
      case 'ArrowRight':
        if (focusedTab === tabs.length - 1) {
          setSelectedTab(0)
        } else {
          setSelectedTab(focusedTab + 1)
        }
        break
      case 'ArrowLeft':
        if (focusedTab === 0) {
          setSelectedTab(tabs.length - 1)
        } else {
          setSelectedTab(focusedTab - 1)
        }
        break
      default:
        break
    }
  }

  return (
    <div role="tablist" style={styles.container}>
      {tabs.map((tab, index) => {
        const isSelected = selectedTab === index

        return (
          <button
            aria-label={tab.label}
            aria-selected={isSelected}
            className={styles.tab}
            key={tab.text}
            onClick={() => setSelectedTab(index)}
            onKeyUp={e => onKeyUp(e, index)}
            ref={tabRefs[index]}
            role="tab"
            style={isSelected ? styles.tabSelected : null}
            tabIndex={isSelected ? 0 : -1}
          >
            {tab.text}
          </button>
        )
      })}
    </div>
  )
}

Tabs.propTypes = {
  isMobile: PropTypes.bool,
  onTabSelect: PropTypes.func.isRequired,
  selectedTabIndex: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

const getStyles = (isMobile, tokens) => {
  return {
    container: {
      display: 'flex',
    },
    tab: css({
      flex: isMobile ? 1 : '0 1 auto',
      marginBottom: -1,
      fontWeight: tokens.FontWeight.Semibold,
      fontFamily: tokens.Font.Regular,
      backgroundColor: 'transparent',
      border: 'none',
      boxSizing: 'border-box',
      color: tokens.TextColor.Default,
      cursor: 'pointer',
      outline: 'none',
      lineHeight: tokens.LineHeight.Body,
      fontSize: tokens.FontSize.Body,
      paddingTop: tokens.Spacing.Small,
      paddingRight: isMobile ? tokens.Spacing.Medium : tokens.Spacing.Large,
      paddingBottom: tokens.Spacing.Small + BORDER_WIDTH, // Flex doesn't calculate transparent borders correctly
      paddingLeft: isMobile ? tokens.Spacing.Medium : tokens.Spacing.Large,
      ':hover': {
        backgroundColor: tokens.BackgroundColor.TabHover,
        outline: 'none',
      },
      ':focus': {
        backgroundColor: tokens.BackgroundColor.TabHover,
        outline: 'none',
      },
    }),
    tabSelected: {
      color: tokens.TextColor.TabActive,
      borderBottom: `${BORDER_WIDTH}px solid ${tokens.BorderColor.TabActive}`,
      paddingBottom: tokens.Spacing.Small,
    },
  }
}

export const TabDivider = () => {
  const tokens = useTokens()

  return (
    <div
      style={{
        width: '100%',
        height: 1,
        backgroundColor: tokens.BackgroundColor.TabDivider,
      }}
    />
  )
}

// Helper component keeping padding consistent
export const DesktopTabSibling = ({ children }) => {
  const tokens = useTokens()

  return (
    <div
      style={{
        paddingTop: tokens.Spacing.Small,
        paddingRight: tokens.Spacing.Large,
        paddingBottom: tokens.Spacing.Small + BORDER_WIDTH,
        paddingLeft: tokens.Spacing.Large,
      }}
    >
      {children}
    </div>
  )
}
