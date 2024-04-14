import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
 display: block;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;

    width: 500px;
`;

export const StatisticsTitle = styled.h2`
    font-size: 22px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    color: #3E4A5A;
    text-align: center;
    text-transform: uppercase;
    background-color: #f2e7fb;

    border: 1px solid #9DA8B4;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    padding: 20px;
`;

export const List = styled.ul`
    display: flex;

    border-right: 1px solid #9DA8B4;
    border-bottom: 1px solid #9DA8B4;
    border-left: 1px solid #9DA8B4;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    overflow: hidden; // Цвет background-color вписывается в закругления

    list-style: none;
`;

// Функция выбора background-color ярлыков
const getBgColor = props => {
	switch (props.$variant) {
		case 'id-1':
			return '#8c9739';
		case 'id-2':
            return '#F5742F';
        case 'id-3':
            return '#32ac9e';
        case 'id-4':
            return '#9F2FF5';
        case 'id-5':
			return '#68A3A1';
		default:
			return 'white';
	}
};

export const ListItem = styled.li`
    width: 100px;

    background-color: ${getBgColor};

    /* Внутренние границы ячеек списка */
    &:nth-child(-n + 4) {
        border-right: 1px solid #9DA8B4;
    };
`;

export const ItemHeader = styled.span`
    display: block;
    font-size: 16px;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    text-align: center;

    padding-top: 10px;
    padding-bottom: 10px;
`;

export const ItemData = styled.span`
    display: block;

    font-size: 25px;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    text-align: center;

    padding-bottom: 10px;
`;