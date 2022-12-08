import styled from 'styled-components';

export const OtherItemsWrapper = styled.section`
  & > p.title {
    padding: 1.25rem 1rem;
    font-size: 1rem;
    font-weight: 700;
  }
`;

export const OtherItemsContentWrapper = styled.div`
  display: grid;
  gap: 1.25rem;
  padding: 0.25rem 1rem 1rem;
  grid-template-columns: 1fr 1fr;
`;

export const OtherItem = styled.button`
  cursor: pointer;
  background-color: inherit;
  flex-direction: column;

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: left;
  }
`;

export const OtherItemImageWrapper = styled.div`
  margin-bottom: 0.5rem;
  padding-bottom: 75%;
  width: 100%;
  position: relative;

  & > div {
    border-radius: 0.375rem;
    background-color: #2b2e33;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
`;
