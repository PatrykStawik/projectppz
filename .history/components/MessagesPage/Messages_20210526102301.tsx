import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { setFlex } from '../../styles/functions';

const Wrapper = styled.div`
  .search {
    ${setFlex()};
    justify-content: center;
    input{
      margin-left: 20px;
    }
  }
`;

export const MessagesPage = () => {
  return (
    <Wrapper>
      <div className="search">
        <Input placeholder="Szukaj..." />
        <Button>
          <span>Szukaj</span>
        </Button>
      </div>
    </Wrapper>
  );
};
