import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';
import defaultImg from '../../../public/default.webp'

const Wrapper = styled.div`

`

export const Bar = () => {
  return (
    <Wrapper>
      <Image src="" alt="picture" width={160} height={160}/>
    </Wrapper>
  )
}
