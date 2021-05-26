import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

interface Props {
  href: string;
}

export const NextLink: React.FC<Props> = ({ children, href }) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};
