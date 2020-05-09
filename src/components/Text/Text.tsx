import React from 'react'

export interface TextProps {
  text?: string
}

function Text({
  text = '',
}: TextProps) {
  return (
    <div>
      { text }
    </div>
  )
}

export default Text
