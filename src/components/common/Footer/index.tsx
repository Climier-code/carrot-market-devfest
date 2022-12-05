import React from 'react';
import Home from 'src/assets/home.svg';
import Category from 'src/assets/category.svg';
import Sell from 'src/assets/sell.svg';
import Chats from 'src/assets/chats.svg';
import My from 'src/assets/my.svg';
import { FooterWrapper, FooterItemWrapper, FooterItem } from './styled';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterItemWrapper>
        <FooterItem>
          <div>
            <img src={Home} alt="home" />
          </div>
          <p>홈</p>
        </FooterItem>
        <FooterItem>
          <div>
            <img src={Category} alt="Category" />
          </div>
          <p>카테고리</p>
        </FooterItem>
        <FooterItem>
          <div>
            <img src={Sell} alt="Sell" />
          </div>
          <p>글 쓰기</p>
        </FooterItem>
        <FooterItem>
          <div>
            <img src={Chats} alt="Chats" />
          </div>
          <p>채팅</p>
        </FooterItem>
        <FooterItem>
          <div>
            <img src={My} alt="My" />
          </div>
          <p>나의 당근</p>
        </FooterItem>
      </FooterItemWrapper>
    </FooterWrapper>
  );
};

export default Footer;
