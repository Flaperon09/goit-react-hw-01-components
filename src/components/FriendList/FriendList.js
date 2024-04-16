import { FriendWrapper, FriendTitle, FriendsList } from "./FriendList.styled";
import {  FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <FriendWrapper>
            <FriendTitle>Friends</FriendTitle>
            <FriendsList>
                {friends.map(({ id, isOnline, avatar, name }) => {
                    return (
                        <FriendListItem
                            key={id}
                            isOnline={isOnline}
                            avatar={avatar}
                            name={name}                                                    
                        />
                    )
                })}
            </FriendsList>
        </FriendWrapper>
    )
};