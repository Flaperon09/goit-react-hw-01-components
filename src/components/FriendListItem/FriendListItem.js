import { Icon, FriendsListItem, FriendIsOnLine, FriendAvatar, FriendName } from "./FriendListItem.styled";

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <FriendsListItem>
            <FriendIsOnLine><Icon $variant={isOnline} /></FriendIsOnLine>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FriendsListItem>
    )
}
