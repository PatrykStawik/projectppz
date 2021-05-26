import React from 'react';
import styled from 'styled-components'
import { Bar } from '../common/Bar';

const Wrapper = styled.div`

`

export const IndexPage = () => {
  return (
    <Wrapper>
      <div className="advertisement">
      <Bar title="Jakies ogłoszenie losowe" content="Sprzedam opla tanie cenak do ruchania do negocjaji ujebany błotnik pozbęde sie tej kurwy" date=""/>
      </div>
    </Wrapper>
  )
};
