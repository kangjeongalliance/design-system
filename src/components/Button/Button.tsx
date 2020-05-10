/**
 * Leo Jeong 2020 05 10
 *
 * Component for Clickable Button.
 * Button have various callback to hook in step when button is clicked.
 */

// External
import React from 'react'

// Internal
import {
  ButtonProps,
  ButtonTheme,
} from './Button.types'

function Button({
  content = 'Button',
  theme = ButtonTheme.Normal,
}: ButtonProps) {
  return (
    <button>
      {content}
    </button>
  )
}

Button.ButtonTheme = ButtonTheme

export default Button
