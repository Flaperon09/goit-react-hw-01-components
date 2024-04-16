import styled from 'styled-components';
import { BsCircleFill } from "react-icons/bs";

export const Icon = styled(BsCircleFill)`
	color: ${props => ( props.$variant ? 'green' : 'red' )};
`;

export const FriendsListItem = styled.li`
    display: flex;
    width: 300px;
    margin-top: 15px;
    align-items: center;
    background-color: white;

    border: 1px solid #9DA8B4;
    border-radius: 8px;

    box-shadow: 0px 5px 10px -5px rgba(0,0,0,0.76);
`;

export const FriendIsOnLine = styled.span`
    padding: 10px;
`;

export const FriendAvatar = styled.img`
    width: 60px;
    padding: 5px;
`;

export const FriendName = styled.p`
    padding: 10px;

    font-size: 22px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    color: #3E4A5A;
`;