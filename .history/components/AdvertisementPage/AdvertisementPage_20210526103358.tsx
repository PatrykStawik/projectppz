import React from 'react';
import styled from 'styled-components';

const categoriesData = [
  {
    title: "Kat1"
  },
  {
    title: "Kat2"
  },
  {
    title: "Kat3"
  }
]

const Wrapper = styled.div`

`

export const AdvertisementPage = () => {
  return (
    <Wrapper>
      <div className="categories">
        {categoriesData.map(i => <div)}
      </div>
    </Wrapper>
  )
};
