import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #212124;
`;

export const HeaderContentWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 2.75rem;

  border-bottom: 1px solid #43474f;
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
