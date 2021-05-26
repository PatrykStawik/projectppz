import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const Wrapper = styled.div`
  footer {
    height: 80px;
    background-color: ${colors.}
  }
`;

export const Footer: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <footer>Losowa stopka</footer>
      {children}
    </Wrapper>
  );
};
