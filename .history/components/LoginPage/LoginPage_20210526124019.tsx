import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

const Wrapper = styled.div``;

export const LoginPage = () => {
  return <Wrapper>
    <Input placeholder="login"/>
    <Input placeholder="hasło" type="password"/>
  </Wrapper>;
};
