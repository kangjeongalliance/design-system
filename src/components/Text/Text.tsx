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
import { TextProps } from './Text.types'

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
