import React from 'react';
import MannerRating from 'src/assets/mannerRating.svg';
import { UserWrapper, UserProfileImage, UserProfileContent, UserMannerRating } from './styled';

interface Props {
  profileImg: string;
  userName: string;
  rating: number;
  location: string;
}

const UserProfile: React.FC<Props> = (props) => {
  const { profileImg, userName, rating, location } = props;

  return (
    <UserWrapper>
      <UserProfileImage src={profileImg} alt="profileImg" width={'100%'} height={'100%'} />
      <UserProfileContent>
        <p className="name">{userName}</p>
        <p className="location">{location}</p>
      </UserProfileContent>
      <UserMannerRating>
        <div className="progress">
          <img src={MannerRating} alt="rating" />
        </div>
        <p className="link">매너온도</p>
      </UserMannerRating>
    </UserWrapper>
  );
};

export default UserProfile;
