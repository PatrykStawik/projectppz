import React, {useRef} from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: red;
  ${Link}{

  }
`;

interface Props {
  href: string;
}

export const NextLink: React.FC<Props> = ({ children, href }) => {
  const linkRef = useRef()
  return <StyledLink ref={} href={href}>{children}</StyledLink>;
};
