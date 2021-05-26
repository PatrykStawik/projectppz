import React from 'react'
import Link as Dupa from 'next/link'
import styled from 'styled-components'

const StyledLink = styled(Link)`

`



export const Link: React.FC = ({children}) => {
  return (
    <StyledLink>
      {children}
    </StyledLink>
  )
}
