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
          <p>Home</p>
        </FooterItem>
        <FooterItem>
          <div>
            <img src={Category} alt="Category" />
          </div>
          <p>Category</p>
        </FooterItem>
        <FooterItem>
          <div>
            <img src={Sell} alt="Sell" />
          </div>
          <p>Sell</p>
        </FooterItem>
        <FooterItem>
          <div>
            <img src={Chats} alt="Chats" />
          </div>
          <p>Chats</p>
        </FooterItem>
        <FooterItem>
          <div>
            <img src={My} alt="My" />
          </div>
          <p>My</p>
        </FooterItem>
      </FooterItemWrapper>
    </FooterWrapper>
  );
};

export default Footer;
