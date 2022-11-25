import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import React from 'react';
import Footer from 'src/components/common/Footer';
import Header from 'src/components/common/Header';
import ProductItem from 'src/components/common/ProductItem';
import { PRODUCT_LIST_MOCK_DATA } from 'src/constants/productList';
import styled from 'styled-components';

const MainPage: ActivityComponentType = () => {
  return (
    <AppScreen>
      <Header />
      <ItemsWrapper>
        {PRODUCT_LIST_MOCK_DATA.map((data) => (
          <ProductItem
            key={data.id}
            id={data.id}
            pictureSrc={data.pictureSrc}
            title={data.title}
            author={data.author}
            madeAt={data.madeAt}
            amount={data.amount}
          />
        ))}
      </ItemsWrapper>
      <Footer />
    </AppScreen>
  );
};

export default MainPage;

const ItemsWrapper = styled.section`
  padding: 44px 0 60px;
  height: calc(100vh - 104px);
  overflow-y: auto;
`;
