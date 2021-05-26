import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { setFlex } from '../../styles/functions';
import { colors } from '../../styles/colors';

const Wrapper = styled.div`
  ${setFlex()};
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  .container{
  width: 500px;
  height: 500px;
  border: 1px solid ${colors.orange};
  border-radius: 5px;
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
        <tex
      </div>
    </Wrapper>
  );
};
