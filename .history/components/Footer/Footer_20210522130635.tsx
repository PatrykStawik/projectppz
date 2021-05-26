import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`

`

export const Footer: React.FC = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
