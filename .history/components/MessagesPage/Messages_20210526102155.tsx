import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import {} from '../../styles/'

const Wrapper = styled.div`
.search{

}
`;

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
