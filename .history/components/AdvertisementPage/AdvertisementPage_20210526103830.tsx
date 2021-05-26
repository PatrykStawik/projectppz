import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { centerText } from '../../styles/functions';

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
background-color: red;
  .categories {
    width: 30vw;
    height: 100%;
    background-color: ${colors.pink};
    .singleCategory {
      height: 40px;
      ${centerText(40)};
    }
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
