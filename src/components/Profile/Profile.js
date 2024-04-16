import { ProfileWrapper, ProfileCard, ProfileImg, ProfileName, ProfileData, ProfileStat, ProfileStatItem, ItemDataHead, ItemDataInfo } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats:{ followers, views, likes } }) => {
  return (
    <ProfileWrapper>
      <ProfileCard>
        <ProfileImg
          src={avatar}
          alt={username}
        />
        <ProfileName>{username}</ProfileName>
        <ProfileData>@{tag}</ProfileData>
        <ProfileData>{location}</ProfileData>
      </ProfileCard>
      
      <ProfileStat>
        <ProfileStatItem>
          <ItemDataHead>Followers</ItemDataHead>
          <ItemDataInfo>{followers}</ItemDataInfo>
        </ProfileStatItem>
        <ProfileStatItem>
          <ItemDataHead>Views</ItemDataHead>
          <ItemDataInfo>{views}</ItemDataInfo>
        </ProfileStatItem>
        <ProfileStatItem>
          <ItemDataHead>Likes</ItemDataHead>
          <ItemDataInfo>{likes}</ItemDataInfo>
        </ProfileStatItem>
      </ProfileStat>
    </ProfileWrapper>
  )
};