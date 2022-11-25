import React from 'react';
import { useFlow } from 'src/utils/stackflow';
import styled from 'styled-components';

interface Props {
  id: number;
  pictureSrc: string;
  title: string;
  author: string;
  madeAt: number;
  amount: number;
}

const ProductItem: React.FC<Props> = (props) => {
  const { id, pictureSrc, title, author, madeAt, amount } = props;

  const { push } = useFlow();

  const handleLinkDetailPage = () => {
    push('DetailPage', {
      id,
    });
  };

  return (
    <ProductItemWrapper>
      <button onClick={handleLinkDetailPage}>
        <ProductImageWrapper>
          <img src={pictureSrc} alt="title" />
        </ProductImageWrapper>
        <ProductDetailWrapper>
          <p className="title">{title}</p>
          <p className="detail">
            {author} · {madeAt} day ago
          </p>
          <p className="amount">{amount}</p>
        </ProductDetailWrapper>
      </button>
    </ProductItemWrapper>
  );
};

export default ProductItem;

export const ProductItemWrapper = styled.div`
  display: flex;
  padding: 1rem 1rem 0;

  button {
    box-shadow: 0 1px 0 0 hsla(0, 0%, 100%, 0.05);
    padding-bottom: 1rem;
    width: 100%;
    background-color: #212124;
  }
`;

export const ProductImageWrapper = styled.div`
  width: 6.75rem;
  height: 6.75rem;
  border-radius: 0.375rem;
  margin-right: 1rem;
  background-size: cover;
  background-position: 50% 50%;

  img {
    height: 108px;
    width: 108px;
  }
`;

export const ProductDetailWrapper = styled.div`
  p {
    text-align: left;
    &.title {
      font-size: 1rem;
      line-height: 1.375rem;
    }
    &.detail {
      line-height: 1.25rem;
      font-size: 0.8125rem;
      color: #868b94;
    }
    &.amount {
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.25rem;
    }
  }
`;
