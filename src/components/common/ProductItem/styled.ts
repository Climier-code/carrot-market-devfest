import styled from 'styled-components';

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
    width: 6.75rem;
    height: 6.75rem;
  }
`;

export const ProductDetailWrapper = styled.div`
  p {
    text-align: left;
    &.name {
      font-size: 1rem;
      line-height: 1.375rem;
    }
    &.detail {
      line-height: 1.25rem;
      font-size: 0.8125rem;
      color: #868b94;
    }
    &.price {
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.25rem;
    }
  }
`;
