import React from 'react'
import Text from './Text'

export default {
  title: 'Text',
}

export function Default() {
  return (
    <Text text="hello, world" />
  )
}

export function WithSize() {
  return (
    <Text text="hello, world" size={50} />
  )
}

export function WithColor() {
  return (
    <>
      <Text
        text="hello, world"
        color="red"
      />
      <Text
        text="hello, world"
        color={[100, 50, 80, 0.5]}
      />
    </>
  )
}

export function WithWeight() {
  return (
    <>
      <p>Use bold, normal, lighter options.</p>
      <Text
        text="hello, world with bold."
        weight="bold"
      />
      <p>Also, you can use number.</p>
      <Text
        text="hello, world with weight 800."
        weight={800}
      />
    </>
  )
}
