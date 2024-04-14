import styled from 'styled-components';

export const ProfileWrapper = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;

    width: 300px;
`;

export const ProfileCard = styled.div`
    display: block;

    width: 300px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;

    border: 1px solid #9DA8B4;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    background-color: white;
`;

export const ProfileImg = styled.img`
    display: block;
    width: 150px;
    height: 150px;

    margin-left: auto;
    margin-right: auto;

    border: 1px solid #E7ECF2;
    border-radius: 50%;
`;

export const ProfileName = styled.p`
    font-size: 22px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    color: #3E4A5A;
    text-align: center;
    margin-top: 20px;
`;

export const ProfileData = styled.p`
    font-size: 18px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    color: #9DA8B4;
    text-align: center;
    margin-top: 20px;
`;

export const ProfileStat = styled.ul`
    display: flex;
    justify-content: center;

    margin-top: 0px;
    padding: 0px;

    border-right: 1px solid #9DA8B4;
    border-bottom: 1px solid #9DA8B4;
    border-left: 1px solid #9DA8B4;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    background-color: #F3F6F9;

    list-style: none;
`;

export const ProfileStatItem = styled.li`
    display: block;
    width: 100px;
    
    text-align: center;

    /* Внутренние границы ячеек списка */
    &:nth-child(-n + 2) {
        border-right: 1px solid #9DA8B4;
    };
`;

export const ItemDataHead = styled.span`
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;

    font-size: 16px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    color: #9DA8B4;
`;

export const ItemDataInfo = styled.span`
    display: block;
    margin-bottom: 20px;

    font-size: 20px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    color: #3E4A5A;
`; 