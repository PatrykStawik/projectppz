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
  { title: 'Strona Główna', href: '/' },
  { title: 'Ogłoszenia', href: '/ogloszenia' },
  { title: 'Wiadomości', href: '/wiadomosci' },
  { title: 'Login', href: '/login' },
];

export const Header: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <div className="baner">DOJEBANY BANER</div>
      <div className="menu">
        {data.map(({ title, href }) => (
          <NextLink href={href} key={title}>
            <div className="menuItem">{title}</div>
          </NextLink>
        ))}
      </div>
    </Wrapper>
  );
};
