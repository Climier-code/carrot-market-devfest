import { AppScreen } from '@stackflow/plugin-basic-ui';
import React from 'react';
import { DetailPageBackButton } from 'src/components/common/Stackflow';
import { ProductInterface, UserInterface } from 'src/schemas/Product';
import { getProductData } from 'src/services/product';
import { getUserData } from 'src/services/user';
import { useFlow } from 'src/utils/stackflow';
import styled from 'styled-components';
import OtherItems from './components/OtherItems';
import ProductDetail from './components/ProductDetail';
import UserProfile from './components/UserProfile';

type DetailParams = {
  params: {
    id: string;
  };
};

const DetailPage: React.FC<DetailParams> = ({ params: { id } }) => {
  const { pop } = useFlow();

  const [product, setProduct] = React.useState<ProductInterface>();
  const [user, setUser] = React.useState<UserInterface>();

  const loadUser = async (userId: number) => {
    const { data } = await getUserData(userId);
    setUser(data);
  };

  const loadProductDetail = async () => {
    const { data } = await getProductData(Number(id));
    setProduct(data);

    loadUser(data.userID);
  };

  React.useEffect(() => {
    loadProductDetail();
  }, []);

  return (
    <AppScreen
      appBar={{
        backButton: {
          render: () => <DetailPageBackButton onClick={pop} />,
        },
        borderColor: '#43474f',
      }}
    >
      {product && user && (
        <section>
          <ProductImageWrapper>
            <img src={product.img} alt="productImg" width={'100%'} height={'100%'} />
          </ProductImageWrapper>
          <UserProfile {...user} />
          <ProductDetail {...product} />
          <OtherItems userName={user.userName} other={user.other} />
        </section>
      )}
    </AppScreen>
  );
};

export default DetailPage;

const ProductImageWrapper = styled.span`
  width: 100%;
  height: 100%;
  display: inline-block;
`;
