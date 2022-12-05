import React from 'react';
import { getBeforeDays } from 'src/utils/date';
import { ProductDetailWrapper, ProductName, ProductArticleDetail, ProductInfo, ProductArticleData } from './styled';

interface Props {
  name: string;
  category: string;
  dates: string;
  info: string;
  chats: number;
  favorites: number;
  views: number;
}

const ProductDetail: React.FC<Props> = (props) => {
  const { name, category, dates, info, chats, favorites, views } = props;
  return (
    <ProductDetailWrapper>
      <ProductName>{name}</ProductName>
      <ProductArticleDetail>
        {category} ∙ {getBeforeDays(dates)}일 전
      </ProductArticleDetail>
      <ProductInfo>{info}</ProductInfo>
      <ProductArticleData>
        채팅 {chats} ∙ 관심 {favorites} ∙ 조회 {views}
      </ProductArticleData>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
