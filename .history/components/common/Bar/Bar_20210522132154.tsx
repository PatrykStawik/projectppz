import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';

const Wrapper = styled.div`

`

export const Bar = () => {
  return (
    <Wrapper>
      <Image src="https://cdn.cmc-gallery.pl/static/img/160x160.jpg" alt="picture"/>
    </Wrapper>
  )
}
