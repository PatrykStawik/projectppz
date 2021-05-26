import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

export const Footer: React.FC = ({children}) => {
  return (
    <Wrapper>
      <footer>Losowa stopka</footer>
      {children}
    </Wrapper>
  )
}
