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
  { title: 'SWiadomości', href: '/wiadomosci' },
  { title: 'Login', href: '/login' },
];

export const Header: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <div className="baner">DOJEBANY BANER</div>
      <div className="menu">
        {data.map(({ title, link }) => (
          <NextLink href={link} key={title}>
            {title}
          </NextLink>
        ))}
      </div>
    </Wrapper>
  );
};
