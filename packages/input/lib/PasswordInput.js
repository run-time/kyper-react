import React, { forwardRef, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Eye, EyeOff } from '@kyper/icon'
import { TextInput } from './TextInput'

export const PasswordInput = forwardRef(
  (
    { allowToggle, ariaHideLabel = 'Hide password', ariaShowLabel = 'Show password', ...rest },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const inputRef = ref || useRef(0)

    const buttonStyles = {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    }

    // Moves the cursor to the end of the input after toggle
    useEffect(() => {
      const input = inputRef.current

      if (input.value && showPassword) {
        input.setSelectionRange(input.value.length, input.value.length + 1)
      }
    }, [showPassword])

    return (
      <TextInput
        iconRight={
          allowToggle ? (
            <button
              aria-label={showPassword ? ariaHideLabel : ariaShowLabel}
              onClick={() => {
                setShowPassword(!showPassword)
                inputRef.current.focus()
              }}
              style={buttonStyles}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          ) : null
        }
        ref={inputRef}
        type={showPassword ? 'text' : 'password'}
        {...rest}
      />
    )
  },
)

PasswordInput.propTypes = {
  allowToggle: PropTypes.bool,
  ariaHideLabel: PropTypes.string,
  ariaShowLabel: PropTypes.string,
  ...TextInput.propTypes,
}

PasswordInput.displayName = 'PasswordInput'
