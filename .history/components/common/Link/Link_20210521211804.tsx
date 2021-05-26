import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled(Link)`

`



export const Linka: React.FC = ({children}) => {
  return (
    <StyledLink>
      {children}
    </StyledLink>
  )
}
