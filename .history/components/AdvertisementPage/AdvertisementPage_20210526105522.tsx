import React from 'react';
import styled from 'styled-components';
import { Bar } from '../common/Bar';
import { Button } from '../common/Button';
import { colors } from '../../styles/colors';
import { centerText, setFlex } from '../../styles/functions';

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
  ${setFlex()};
  margin-bottom: 80px;
  .categories {
    width: 30vw;
    height: 100%;
    margin-top: 20px;
    background-color: ${colors.pink};
    .singleCategory {
      height: 40px;
      ${centerText(40)};
      cursor: pointer;
      margin: 2px 0;
    }
  }
  .bars {
    flex: 1;
  }
  button{
    
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
        <Button><span>Dodaj ogłoszenie</span></Button>
      </div>
      <div className="bars">
        <Bar title="ets" content="sadad" date="10.10.10" />
        <Bar title="ets" content="sadad" date="10.10.10" />
        <Bar title="ets" content="sadad" date="10.10.10" />
        <Bar title="ets" content="sadad" date="10.10.10" />
        <Bar title="ets" content="sadad" date="10.10.10" />
        <Bar title="ets" content="sadad" date="10.10.10" />
        <Bar title="ets" content="sadad" date="10.10.10" />
      </div>
    </Wrapper>
  );
};
