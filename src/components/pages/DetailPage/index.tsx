import { AppScreen } from '@stackflow/plugin-basic-ui';
import React from 'react';
import { ReactComponent as Back } from 'src/assets/back.svg';
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

  const handleBackToMainPage = () => {
    pop();
  };

  return (
    <AppScreen
      appBar={{
        backButton: {
          render() {
            return (
              <button onClick={handleBackToMainPage}>
                <Back />
              </button>
            );
          },
        },
      }}
    >
      <section>
        <ProductImageWrapper>
          <img src={'https://picsum.photos/800/800/?id=11257089'} alt="mock-img" width={'100%'} height={'100%'} />
        </ProductImageWrapper>
        <UserProfile name="Emila" location="Woolston" imageSrc="https://picsum.photos/800/800/?id=11257089" />
        <ProductDetail
          title="Private"
          category="Baby &amp; Kids"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sit sem ullamcorper urna, lacinia eu
          tortor, mattis. Venenatis ut cursus amet in."
          madeAt={3}
          articleData={{ chatsCount: 1, favoritesCount: 2, viewsCount: 212 }}
        />
        <OtherItems userName="Emila" id={id} />
      </section>
    </AppScreen>
  );
};

export default DetailPage;

const ProductImageWrapper = styled.span`
  width: 100%;
  height: 100%;
  display: inline-block;
`;
