import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

const Wrapper = styled.div``;

export const MessagesPage = () => {
  return (
    <Wrapper>
      <div className="search">
        <Input placeholder="Szukaj..." />
        <Button><span>Szukaj</span></Button>
      </div>
    </Wrapper>
  );
};
