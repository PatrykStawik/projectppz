import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

const Wrapper = styled.div``;

export const LoginPage = () => {
  return (
    <Wrapper>
      <div className="inputs">
        <Input placeholder="login" />
        <Input placeholder="hasło" type="password" />
      </div>
      <div className="btns">
        <Button><span>Nie masz konta?</span></Button>
        <Button><span>Zaloguj</span></Button>
      </div>
    </Wrapper>
  );
};
