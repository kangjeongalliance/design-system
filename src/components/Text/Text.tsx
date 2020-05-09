/**
 * Leo Jeong, 2020 05 10
 *
 * Component for rendering ONLY Text.
 * No callback for any delicate features.
 */

// External
import React, { useMemo } from 'react'
import _ from 'lodash'

// Internal
import TextComponent from './Text.styled'

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

function Text({
  text = '',
  size = 15,
  font,
  color = 'black',
  weight = 'normal',
}: TextProps) {
  const colorProp = useMemo(() => {
    if (_.isString(color)) return color
    else if (_.isArray(color)) return `rgba(${color.toString()})`
    return 'black'
  }, [color])

  return (
    <TextComponent
      font={font}
      size={size}
      weight={weight}
      color={colorProp}
    >
      {text}
    </TextComponent>
  )
}

export default Text
