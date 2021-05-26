import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';

const Wrapper = styled.div`
height: 100px;
border: 2px solid red;
margin-bottom: 100px;
`

export const Bar = () => {
  return (
    <Wrapper>
      <Image src="/public/default.webp" alt="picture" width={80} height={80} loader={myLoader}/>
      sdfsfsdfs
    </Wrapper>
  )
}
