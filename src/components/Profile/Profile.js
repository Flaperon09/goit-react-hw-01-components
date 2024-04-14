import { ProfileWrapper, ProfileCard, ProfileImg, ProfileName, ProfileData, ProfileStat, ProfileStatItem, ItemDataHead, ItemDataInfo } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
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
          <ItemDataInfo>{stats.followers}</ItemDataInfo>
        </ProfileStatItem>
        <ProfileStatItem>
          <ItemDataHead>Views</ItemDataHead>
          <ItemDataInfo>{stats.views}</ItemDataInfo>
        </ProfileStatItem>
        <ProfileStatItem>
          <ItemDataHead>Likes</ItemDataHead>
          <ItemDataInfo>{stats.likes}</ItemDataInfo>
        </ProfileStatItem>
      </ProfileStat>
    </ProfileWrapper>
  )
};