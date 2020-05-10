/**
 * Leo Jeong, 2020 05 11
 */

export interface TextProps {
  // Text content to render.
  text?: string
  // Font size.
  size?: number
  // Font Family, default is Arial.
  font?: string
  // Give color as Hex Code, or rgb func arguments.
  color?: string | number[]
  // Font weight
  weight?: string | number
}
