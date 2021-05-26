import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { centerText, setFlex } from '../../styles/functions';
import { NextLink } from '../common/NextLink';

const Wrapper = styled.header`
  .baner {
    height: 80px;
    background-color: ${colors.red};
  }
  .menu {
    ${setFlex('column')}
    height: 80px;
    border-bottom: 1px solid ${colors.orange};
    .menuItem {
      flex: 1;
      height: 100%;
      ${centerText(80)};
      background-color: ${colors.white};
      color: ${colors.orange};
      cursor: pointer;
      transition: .5s all;
      &:hover{
        font-weight: bold;
      }
    }
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
      {children}
      <NextLink href="s/da">sdasd</NextLink>
    </Wrapper>
  );
};
