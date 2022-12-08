import React from 'react';
import { ProductInterface } from 'src/schemas/Product';
import { getBeforeDays } from 'src/utils/date';
import { useFlow } from 'src/utils/stackflow';
import { EllipsisBox } from '../elements';
import { ProductItemWrapper, ProductImageWrapper, ProductDetailWrapper } from './styled';

interface Props {
  item: ProductInterface;
}

const ProductItem: React.FC<Props> = (props) => {
  const { id, img, name, dates, price, location } = props.item;

  const { push } = useFlow();

  const handleLinkDetailPage = () => {
    push('DetailPage', { id: id.toString() });
  };

  return (
    <ProductItemWrapper>
      <button onClick={handleLinkDetailPage}>
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
