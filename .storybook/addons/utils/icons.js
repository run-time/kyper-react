import React, { useState, useEffect } from 'react'
import copy from 'copy-to-clipboard'
import { useTokens } from '@kyper/tokenprovider'

import { FlexContainer } from '../blocks/blocks'

const chunk = (array, size) => {
  const chunked = []
  let index = 0

  while (index < array.length) {
    chunked.push(array.slice(index, size + index))
    index += size
  }
  return chunked
}

const IconWrapper = ({ bg, fg, Icon }) => {
  const tokens = useTokens()
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    let timeout = setTimeout(() => {
      setClicked(false)
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [clicked])

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      position: 'relative',
      background: bg,
      padding: 20,
    },
    name: {
      color: fg,
      paddingTop: 10,
      fontFamily: `'Proxima Nova', sans-serif`,
      fontSize: 16,
    },
    copiedContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    copiedBackground: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: tokens.BackgroundColor.Body,
      opacity: '80%',
      zIndex: 0,
    },
    copiedText: {
      zIndex: 1,
      color: tokens.Color.Success300,
      fontSize: tokens.FontSize.H2,
      fontFamily: 'monospace',
    },
  }

  return (
    <div
      style={styles.container}
      onClick={() => {
        if (!clicked) {
          copy(`import { ${Icon.displayName} } from '@kyper/icon'`)
          setClicked(true)
        }
      }}
    >
      <Icon size={30} color={fg} />
      <span style={styles.name}>{Icon.displayName}</span>
      {clicked ? (
        <div style={styles.copiedContainer}>
          <div style={styles.copiedBackground} />
          <span style={styles.copiedText}>Copied</span>
        </div>
      ) : null}
    </div>
  )
}

export const IconContainer = ({ bg, fg, icons, groupSize }) => {
  const components = Object.keys(icons).map(icon => icons[icon])
  const chunked = chunk(components, groupSize)

  return (
    <FlexContainer direction="column">
      {chunked.map((group, groupIndex) => {
        return (
          <FlexContainer
            key={groupIndex}
            padding={10}
            containerStyles={{ flexFlow: 'row wrap', height: 80 }}
            itemStyles={{ flex: '1 1 0' }}
          >
            {group.map((Icon, keyIndex) => (
              <IconWrapper bg={bg} fg={fg} Icon={Icon} key={keyIndex} />
            ))}
          </FlexContainer>
        )
      })}
    </FlexContainer>
  )
}
