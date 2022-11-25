import React from 'react';
import Search from 'src/assets/search.svg';
import Control from 'src/assets/control.svg';
import Bell from 'src/assets/bell.svg';
import Chevron from 'src/assets/chevron.svg';
import { HeaderWrapper, HeaderContentWrapper, TitleWrapper, ToolsWrapper } from './styled';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <TitleWrapper>
          <p>Woolston</p>
          <img src={Chevron} alt="chevron" />
        </TitleWrapper>
        <ToolsWrapper>
          <img src={Search} alt="search" />
          <img src={Control} alt="control" />
          <img src={Bell} alt="bell" />
        </ToolsWrapper>
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;
