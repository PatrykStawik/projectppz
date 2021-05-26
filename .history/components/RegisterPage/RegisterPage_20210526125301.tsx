import React from 'react'
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

const Wrapper = styled.div`

`

export const RegisterPage = () => {
  return (
    <Wrapper>
      <Input placeholder="Imie"/>
      <Input placeholder="Nazwisko"/>
      <Input/>
    </Wrapper>
  )
}
