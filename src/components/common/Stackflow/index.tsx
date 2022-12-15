import React from 'react';
import Chevron from 'src/assets/chevron.svg';
import Search from 'src/assets/search.svg';
import Control from 'src/assets/control.svg';
import Bell from 'src/assets/bell.svg';
import { ReactComponent as Back } from 'src/assets/back.svg';
import styled from 'styled-components';

// MainPage
export const MainPageAppBarLeft = () => (
  <TitleWrapper>
    <p>대치2동</p>
    <img src={Chevron} alt="chevron" />
  </TitleWrapper>
);

export const MainPageAppBarRight = () => (
  <ToolsWrapper>
    <img src={Search} alt="search" />
    <img src={Control} alt="control" />
    <img src={Bell} alt="bell" />
  </ToolsWrapper>
);

export const TitleWrapper = styled.div`
  padding: 0 0.5rem;
  display: flex;
  align-items: center;

  p {
    font-size: 1.125rem;
    font-weight: 700;
  }

  img {
    margin-left: 0.5rem;
  }
`;

export const ToolsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5rem 1.5rem 1.5rem;
  grid-gap: 1rem;
  gap: 1rem;
  margin-right: 0.5rem;
`;

// DetailPage
export const DetailPageBackButton = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick}>
    <Back />
  </button>
);
