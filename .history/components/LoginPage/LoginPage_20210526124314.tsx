import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { setFlex } from '../../styles/functions';

const Wrapper = styled.div`
${setFlex('column')};
.inputs{
  ${setFlex('column')};
}
.btns{
  ${setFlex('column')};
  <button></button>
}
`;

export const LoginPage = () => {
  return (
    <Wrapper>
      <div className="inputs">
        <Input placeholder="login" />
        <Input placeholder="hasło" type="password" />
      </div>
      <div className="btns">
        <Button>
          <span>Nie masz konta?</span>
        </Button>
        <Button>
          <span>Zaloguj</span>
        </Button>
      </div>
    </Wrapper>
  );
};
