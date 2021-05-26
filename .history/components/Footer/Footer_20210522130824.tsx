import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
footer{
  h80
}
`

export const Footer: React.FC = ({children}) => {
  return (
    <Wrapper>
      <footer>Losowa stopka</footer>
      {children}
    </Wrapper>
  )
}
