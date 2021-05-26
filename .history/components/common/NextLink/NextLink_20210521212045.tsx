import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled(Link)``;

interface Props {
  href: string;
}

export const NextLink: React.FC = ({ children }, props: Props) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};
