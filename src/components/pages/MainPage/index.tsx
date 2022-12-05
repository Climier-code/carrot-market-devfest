import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import React from 'react';
import Footer from 'src/components/common/Footer';
import ProductItem from 'src/components/common/ProductItem';
import { ProductInterface } from 'src/schemas/Product';
import { getProductList } from 'src/services';
import Chevron from 'src/assets/chevron.svg';
import Search from 'src/assets/search.svg';
import Control from 'src/assets/control.svg';
import Bell from 'src/assets/bell.svg';
import { ItemsWrapper, TitleWrapper, ToolsWrapper } from './styled';

const MainPage: ActivityComponentType = () => {
  const [productList, setProductList] = React.useState<ProductInterface[]>([]);

  const loadProducts = async () => {
    const { data } = await getProductList();

    setProductList(data);
  };

  React.useEffect(() => {
    loadProducts();
  }, []);

  return (
    <AppScreen
      appBar={{
        appendLeft: () => (
          <TitleWrapper>
            <p>대치2동</p>
            <img src={Chevron} alt="chevron" />
          </TitleWrapper>
        ),
        appendRight: () => (
          <ToolsWrapper>
            <img src={Search} alt="search" />
            <img src={Control} alt="control" />
            <img src={Bell} alt="bell" />
          </ToolsWrapper>
        ),
        borderColor: '#43474f',
      }}
    >
      <ItemsWrapper>
        {productList.map((product) => (
          <ProductItem key={product.id} item={product} />
        ))}
      </ItemsWrapper>
      <Footer />
    </AppScreen>
  );
};

export default MainPage;
