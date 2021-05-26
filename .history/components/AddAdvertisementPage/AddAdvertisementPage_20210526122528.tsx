import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';

const Wrapper = styled.div`
  input{
    
  }
`;

export const AddAdvertisementPage = () => {
  return <Wrapper>
    <Input placeholder="Wpisz tytuł"/>
  </Wrapper>;
};
