import React from 'react';
import styled from 'styled-components';
import {colors} from '../../styles/colors'

const categoriesData = [
  {
    title: 'Kat1',
  },
  {
    title: 'Kat2',
  },
  {
    title: 'Kat3',
  },
];

const Wrapper = styled.div`
  .categories{
    width: 30vw;
    height: 100%;
    background-color: ${colors.pink};
  }
`;

export const AdvertisementPage = () => {
  return (
    <Wrapper>
      <div className="categories">
        {categoriesData.map(({ title }) => (
          <div key={title} className="singleCategory">
            {title}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
