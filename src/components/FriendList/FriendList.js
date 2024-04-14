import { FriendWrapper, FriendTitle, Icon, FriendsList, FriendsListItem, FriendIsOnLine, FriendAvatar, FriendName } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
    return (
        <FriendWrapper>
            <FriendTitle>Friends</FriendTitle>
            <FriendsList>
                {friends.map(friend => {
                    return (
                        <FriendsListItem key={friend.id}>
                            <FriendIsOnLine><Icon $variant={friend.isOnline} /></FriendIsOnLine>
                            <FriendAvatar src={friend.avatar} alt="User avatar" width="48" />
                            <FriendName>{friend.name}</FriendName>
                        </FriendsListItem>
                    )
                })}
            </FriendsList>
        </FriendWrapper>
    )
};