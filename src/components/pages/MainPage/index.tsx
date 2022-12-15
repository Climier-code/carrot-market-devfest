import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import React from 'react';
import Footer from 'src/components/common/Footer';
import ProductItem from 'src/components/common/ProductItem';
import { ProductInterface } from 'src/schemas/Product';
import { ItemsWrapper } from './styled';
import { getProductList } from 'src/services/product';
import { useFlow } from 'src/utils/stackflow';
import { MainPageAppBarLeft, MainPageAppBarRight } from 'src/components/common/Stackflow';

const MainPage: ActivityComponentType = () => {
  const { push } = useFlow();

  const handleLinkDetailPage = (id: number) => {
    push('DetailPage', { id: id.toString() });
  };

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
        appendLeft: MainPageAppBarLeft,
        appendRight: MainPageAppBarRight,
        borderColor: '#43474f',
      }}
    >
      <ItemsWrapper>
        {productList.map((product) => (
          <ProductItem key={product.id} item={product} onClickItem={() => handleLinkDetailPage(product.id)} />
        ))}
      </ItemsWrapper>
      <Footer />
    </AppScreen>
  );
};

export default MainPage;
