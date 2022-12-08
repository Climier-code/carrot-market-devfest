import styled from 'styled-components';

export const UserWrapper = styled.section`
  margin: 1rem 1rem 0;
  padding-bottom: 1rem;
  box-shadow: 0 1px 0 0 hsla(0, 0%, 100%, 0.05);

  display: flex;
  align-items: center;
`;

export const UserProfileImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #2b2e33;
  margin-right: 0.75rem;
`;

export const UserProfileContent = styled.div`
  flex: 1 1;
  p {
    &.name {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }
    &.location {
      font-size: 0.8125rem;
      color: #adb1ba;
    }
  }
`;

interface RatingProps {
  ratingColor: string;
}

export const UserMannerRating = styled.div<RatingProps>`
  text-align: right;
  margin: -0.375rem 0;
  display: flex;
  flex-direction: column;

  & > p {
    &.rating {
      color: ${(props) => props.ratingColor};
    }

    &.link {
      text-decoration: underline;
      color: #868b94;
      font-size: 0.75rem;
    }
  }
`;

export const Progress = styled.progress<RatingProps>`
  width: 3.125rem;
  height: 0.25rem;
  appearance: none;
  margin: 0.25rem 0 0.5rem;

  &::-webkit-progress-bar {
    background: #34373d;
    border-radius: 0.25rem;
  }
  &::-webkit-progress-value {
    border-radius: 0.25rem;
    background: ${(props) => props.ratingColor};
  }
`;
