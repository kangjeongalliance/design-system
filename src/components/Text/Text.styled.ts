import styled from '@emotion/styled'

interface TextComponentProps {
  size: number
  font: string
  color: string
  weight: string | number
}

const TextComponent = styled.div<TextComponentProps>`
  font-size: ${props => props.size}px;
  font-family: ${props => props.font || 'Arial'};
  color: ${props => props.color};
  font-weight: ${props => props.weight};
`

export default TextComponent
