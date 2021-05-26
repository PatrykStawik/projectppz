import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';

const Wrapper = styled.div`
height: 100px;
border: 2px solid red;
`

export const Bar = () => {
  return (
    <Wrapper>
      <Image src="/public/default.webp" alt="picture" width={160} height={160}/>
      sdfsfsdf
    </Wrapper>
  )
}
