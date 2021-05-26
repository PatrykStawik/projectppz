import React from 'react';
import styled from 'styled-components';

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
  .catego
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
