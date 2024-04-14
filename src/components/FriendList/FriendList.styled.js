import styled from 'styled-components';
import { BsCircleFill } from "react-icons/bs";

export const FriendWrapper = styled.section`
 display: block;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;

    width: 300px;
`;

export const FriendTitle = styled.h2`
    font-size: 22px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    color: #3E4A5A;
    text-align: center;
    text-transform: uppercase;
    background-color: #f2e7fb;

    border: 1px solid #9DA8B4;
    border-radius: 8px;

    padding: 20px;
`;

// Функция выбора background-color ярлыков
const getBgColor = props => {
    switch (props.$variant) {
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return 'white';
    }
};

export const Icon = styled(BsCircleFill)`
	color: ${getBgColor};
`;

export const FriendsList = styled.ul`
    list-style: none;
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