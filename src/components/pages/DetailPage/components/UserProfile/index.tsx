import React from 'react';
import { getTemperatureColor } from 'src/utils/util';
import { UserWrapper, UserProfileImage, UserProfileContent, UserMannerRating, Progress } from './styled';

interface Props {
  profileImg: string;
  userName: string;
  rating: number;
  location: string;
}

const UserProfile: React.FC<Props> = (props) => {
  const { profileImg, userName, rating, location } = props;

  const ratingColor = getTemperatureColor(rating);

  return (
    <UserWrapper>
      <UserProfileImage src={profileImg} alt="profileImg" width={'100%'} height={'100%'} />
      <UserProfileContent>
        <p className="name">{userName}</p>
        <p className="location">{location}</p>
      </UserProfileContent>
      <UserMannerRating ratingColor={ratingColor ?? '#ffb938'}>
        <p className="rating">{rating}°C</p>
        <Progress value={rating} max={100} ratingColor={ratingColor ?? '#ffb938'} />
        <p className="link">매너온도</p>
      </UserMannerRating>
    </UserWrapper>
  );
};

export default UserProfile;
