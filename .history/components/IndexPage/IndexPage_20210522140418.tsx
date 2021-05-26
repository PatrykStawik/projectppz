import React from 'react';
import styled from 'styled-components';
import { Bar } from '../common/Bar';
import { setFlex } from '../../styles/functions';

const Wrapper = styled.div`
  ${setFlex()};
  .advertisement{
    flex: 1;
    border: 1px solid gray;
    border-radius: 10px;
  }
  .container{
    flex: 1;
  }
`;

export const IndexPage = () => {
  return (
    <Wrapper>
      <div className="advertisement container">
        <Bar
          title="Jakies ogłoszenie losowe"
          content="Sprzedam opla tanie cenak do ruchania do negocjaji ujebany błotnik pozbęde sie tej kurwy"
          date="22.10.2021"
        />
        <Bar
          title="Jakies ogłoszenie losowe"
          content="Sprzedam opla tanie cenak do ruchania do negocjaji ujebany błotnik pozbęde sie tej kurwy"
          date="22.10.2021"
        />
      </div>
      <div className="container">
        <div className="news">
          <Bar
            title="Jakies news losowe"
            content="Twoja stara została wyruchana tak mocno że ją boli"
            date="22.10.2021"
          />
        </div>
        <div className="lotto">JAKIES KURWA LOTTO</div>
      </div>
    </Wrapper>
  );
};
