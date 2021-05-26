import React from 'react';
import styled from 'styled-components';
import { Bar } from '../common/Bar';
import { setFlex } from '../../styles/functions';
import { colors } from '../../styles/colors';

const Wrapper = styled.div`
  ${setFlex()};
  .advertisement {
  }
  .container {
    flex: 1;
    border: 1px solid ${colors.orange};
    border-radius: 10px;
    margin: 20px 10px;
    height: 70vh;
  }
  .c{
    flex: 1;
  }
  .news{
    height: 35vh;
  }
  .lotto{
    height: calc(35vh - 20px);
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
      <div className="c">
        <div className="news container">
          <Bar
            title="Jakies news losowe"
            content="Twoja stara została wyruchana tak mocno że ją boli"
            date="22.10.2021"
          />
        </div>
        <div className="lotto container">JAKIES KURWA LOTTO</div>
      </div>
    </Wrapper>
  );
};
