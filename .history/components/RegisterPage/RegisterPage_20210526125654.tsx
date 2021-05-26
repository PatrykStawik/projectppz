import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { setFlex } from '../../styles/functions';

const Wrapper = styled.div`
${setFlex('column')};
input{
  width: 200px;
}
`;

export const RegisterPage = () => {
  return (
    <Wrapper>
      <Input placeholder="Imie" />
      <Input placeholder="Nazwisko" />
      <Input placeholder="email" />
      <Input placeholder="hasło" type="password" />
      <Button>
        <span>Załóż konto</span>
      </Button>
    </Wrapper>
  );
};
