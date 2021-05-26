import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { Bar } from '../common/Bar';
import { setFlex } from '../../styles/functions';

const Wrapper = styled.div`
margin-bottom: 100px;
  .search {
    ${setFlex()};
    justify-content: center;
    margin-top: 20px;
    input {
      margin-right: 20px;
    }
  }
`;

export const MessagesPage = () => {
  return (
    <Wrapper>
      <div className="search">
        <Input placeholder="Szukaj..." va/>
        <Button>
          <span>Szukaj</span>
        </Button>
      </div>
      <div className="messages">
        <Bar title="dupa" content="dupy dwie" date="10.01.10" />
        <Bar title="dupa" content="dupy dwie" date="10.01.10" />
        <Bar title="dupa" content="dupy dwie" date="10.01.10" />
        <Bar title="dupa" content="dupy dwie" date="10.01.10" />
        <Bar title="dupa" content="dupy dwie" date="10.01.10" />
        <Bar title="dupa" content="dupy dwie" date="10.01.10" />
      </div>
    </Wrapper>
  );
};
