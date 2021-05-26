import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  .baner{
    height: 80px;
  }
`

export const Header = () => {
  return (
    <Wrapper>
      <div className="baner">
        DOJEBANY BANER
      </div>
    </Wrapper>
  )
}
