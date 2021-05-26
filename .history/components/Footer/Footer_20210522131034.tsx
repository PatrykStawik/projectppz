import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const Wrapper = styled.footer`
  footer {
    height: 80px;
    background-color: ${colors.orange};
  }
`;

export const Footer: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <footer>Losowa stopka</footer>
    </Wrapper>
  );
};
