import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const Wrapper = styled.footer`
    height: 80px;
    background-color: ${colors.orange};
    position: absolute;
    right: 100%;
`;

export const Footer = () => {
  return (
    <Wrapper>
      Losowa stopka
    </Wrapper>
  );
};
