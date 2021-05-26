import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { NextLink } from '../common/NextLink';

const Wrapper = styled.header`
  .baner {
    height: 80px;
    background-color: ${colors.red};
  }
`;

const data = [
  { title: 'Strona Główna', link: '/' },
  { title: 'Ogłoszenia', link: '/ogloszenia' },
  { title: 'SWiadomości', link: '/wiadomosci' },
  { title: 'Login', link: '/login' },
];

export const Header: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <div className="baner">DOJEBANY BANER</div>
      <div className="menu">
        {data.map(({ title, link }) => (
          <NextLink href={link} key={}>{title}</NextLink>
        ))}
      </div>
    </Wrapper>
  );
};
