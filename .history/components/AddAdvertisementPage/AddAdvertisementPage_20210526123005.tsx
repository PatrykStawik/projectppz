import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { setFlex } from '../../styles/functions';
import { setFlex } from '../../styles/colors';

const Wrapper = styled.div`
  ${setFlex()};
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  .container{
  width: 500px;
  height: 500px;
  border: 1px solid pink;
  }
  input {
    width: 200px;
  }
`;

export const AddAdvertisementPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <Input placeholder="Wpisz tytuł" />
      </div>
    </Wrapper>
  );
};
