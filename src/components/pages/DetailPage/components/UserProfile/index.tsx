import React from 'react';
import MannerRating from 'src/assets/mannerRating.svg';
import { UserWrapper, UserProfileImage, UserProfileContent, UserMannerRating } from './styled';

interface Props {
  imageSrc: string;
  name: string;
  location: string;
}

const UserProfile: React.FC<Props> = ({ imageSrc, name, location }) => {
  return (
    <UserWrapper>
      <UserProfileImage src={imageSrc} alt="mock-img" width={'100%'} height={'100%'} />
      <UserProfileContent>
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </UserProfileContent>
      <UserMannerRating>
        <div className="progress">
          <img src={MannerRating} alt="rating" />
        </div>
        <p className="link">Rating</p>
      </UserMannerRating>
    </UserWrapper>
  );
};

export default UserProfile;
