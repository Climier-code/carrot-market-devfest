import React from 'react';
import {
  ProductDetailWrapper,
  ProductTitle,
  ProductArticleDetail,
  ProductDescription,
  ProductArticleData,
} from './styled';

interface Props {
  title: string;
  category: string;
  madeAt: number;
  description: string;
  articleData: {
    chatsCount: number;
    favoritesCount: number;
    viewsCount: number;
  };
}

const ProductDetail: React.FC<Props> = (props) => {
  const { title, category, madeAt, description, articleData } = props;
  const { chatsCount, favoritesCount, viewsCount } = articleData;
  return (
    <ProductDetailWrapper>
      <ProductTitle>{title}</ProductTitle>
      <ProductArticleDetail>
        {category} ∙ {madeAt} days ago
      </ProductArticleDetail>
      <ProductDescription>{description}</ProductDescription>
      <ProductArticleData>
        {chatsCount} chats ∙ {favoritesCount} favorites ∙ {viewsCount} views
      </ProductArticleData>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
