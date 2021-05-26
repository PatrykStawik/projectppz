import React from 'react'
import styled from 'styled-components'
import {} from '../../styles/'

const Wrapper = styled.div`
footer{
  height: 80px;

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
