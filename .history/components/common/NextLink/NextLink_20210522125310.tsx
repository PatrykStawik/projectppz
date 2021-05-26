import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {} from '../../../styles/'

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
`;

interface Props {
  href: string;
}

export const NextLink: React.FC<Props> = ({ children, href }) => {
  return <Link href={href}><StyledLink>{children}</StyledLink></Link>;
};
