import React from 'react'
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
imp

const Wrapper = styled.div`

`

export const RegisterPage = () => {
  return (
    <Wrapper>
      <Input placeholder="Imie"/>
      <Input placeholder="Nazwisko"/>
      <Input placeholder="email"/>
      <Input placeholder="hasło" type="password"/>
      <Button><span>Załóż konto</span></Button>
    </Wrapper>
  )
}
