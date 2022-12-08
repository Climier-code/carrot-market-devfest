import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  height: 4.25rem;
  bottom: 0;
  background-color: #212124;
`;

export const FooterItemWrapper = styled.div`
  display: flex;
  grid-template-columns: 1.5rem 1.5rem 1.5rem 1.5rem 1.5rem;
  justify-content: space-between;
  box-shadow: 0 -1px 0 0 #43474f;
  padding: 0.5rem 0;
`;

export const FooterItem = styled.button`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #212124;
  & > div {
    margin-bottom: 0.375rem;
  }

  p {
    font-size: 0.75rem;
  }
`;
