import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { Button } from '../common/NextLink';
import { setFlex } from '../../styles/functions';

const Wrapper = styled.div`
${setFlex('column')};
.inputs{
  ${setFlex('column')};
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  input{
    width: 200px;
    margin: 15px 0;
  }
}
.btns{
  ${setFlex()};
  justify-content: center;
  button{
    width: 200px;
    margin-left: 15px;
  }
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
