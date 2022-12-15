import React from 'react';
import { ProductInterface } from 'src/schemas/Product';
import { getBeforeDays } from 'src/utils/date';
import { EllipsisBox } from '../elements';
import { ProductItemWrapper, ProductImageWrapper, ProductDetailWrapper } from './styled';

interface Props {
  item: ProductInterface;
  onClickItem: () => void;
}

const ProductItem: React.FC<Props> = (props) => {
  const { item, onClickItem } = props;
  const { img, name, dates, price, location } = item;

  return (
    <ProductItemWrapper>
      <button onClick={onClickItem}>
        <ProductImageWrapper>
          <img src={img} alt="product-img" />
        </ProductImageWrapper>
        <ProductDetailWrapper>
          <EllipsisBox>
            <p className="name">{name}</p>
          </EllipsisBox>

          <p className="detail">
            {location} · {getBeforeDays(dates)}일 전
          </p>
          <p className="price">{price}원</p>
        </ProductDetailWrapper>
      </button>
    </ProductItemWrapper>
  );
};

export default ProductItem;
