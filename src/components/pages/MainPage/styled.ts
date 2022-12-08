import styled from 'styled-components';

export const ItemsWrapper = styled.section`
  padding-bottom: 4.25rem;
  height: calc(100vh - 2.75rem - 4.25rem);
  overflow-y: auto;
`;

export const TitleWrapper = styled.div`
  padding: 0 0.5rem;
  display: flex;
  align-items: center;

  p {
    font-size: 1.125rem;
    font-weight: 700;
  }

  img {
    margin-left: 0.5rem;
  }
`;

export const ToolsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5rem 1.5rem 1.5rem;
  grid-gap: 1rem;
  gap: 1rem;
  margin-right: 0.5rem;
`;
