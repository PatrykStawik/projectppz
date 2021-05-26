import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled(Link)``;

interface Props {
  href: string;
}

export const NextLink: React.FC = ({ children, href }: Props) => {
  return <StyledLink>{children}</StyledLink>;
};
