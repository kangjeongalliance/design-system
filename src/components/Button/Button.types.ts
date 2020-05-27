/**
 * Leo Jeong, 2020 05 11
 */

export enum ButtonTheme {
  Normal = 'normal',
  Urgent = 'urgent',
  Primary = 'primary',
  Secondary = 'secondary',
  Ouline = 'outline',
  Ghost = 'ghost',
}

export interface ButtonProps {
  // Button contents.
  content?: string
  // Callback when button is clicked.
  // Any return value will be ignored.
  onClick?: (any: any) => any
  // Button theme for styling.
  theme?: ButtonTheme
  // Any other props (under this line) will be ignored when theme is provided.
  // Color for button background.
  background?: string | number[]
}
