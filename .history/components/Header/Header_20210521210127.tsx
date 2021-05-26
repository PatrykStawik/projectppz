import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const Wrapper = styled.header`
  .baner {
    height: 80px;
    background-color: ${colors.red};
  }
`;

export const Header: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <div className="baner">DOJEBANY BANER</div>
    </Wrapper>
  );
};
