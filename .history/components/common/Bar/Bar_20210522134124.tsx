import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  title: string;
  content: string;
  date: string;
}

const Wrapper = styled.div`
  height: 100px;
  border: 2px solid red;
  margin-bottom: 100px;
`;

const picture = { src: '/default.jpg', alt: 'picture', width: 80, height: 80 };

export const Bar = ({title, content, date}: Props) => {
  return (
    <Wrapper>
      <Image {...picture} />
      <div>
        <p>{title}</p>
        
      </div>
    </Wrapper>
  );
};
