import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import {} from '../../styles/functions'

const Wrapper = styled.div`
width: 500px;
height: 500px;
border: 1px solid pink;
  input{
    width: 200px;
  }
`;

export const AddAdvertisementPage = () => {
  return <Wrapper>
    <Input placeholder="Wpisz tytuł"/>
  </Wrapper>;
};
