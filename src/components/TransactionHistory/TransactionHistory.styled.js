import styled from 'styled-components';

export const TransactionWrapper = styled.section`
 display: block;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;

    width: 600px;
`;

export const TransactionTitle = styled.h2`
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;

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

export const TransTable = styled.table`
    width: 100%;
	margin-bottom: 20px;
	border: 1px solid #dddddd;
	border-collapse: collapse;

    box-shadow: 0px 5px 10px -5px rgba(0,0,0,0.76);
`;

export const TransTr = styled.tr`
    &:nth-child(odd) {
	    background: #fff;
    };

    &:nth-child(even){
	    background: #ECF1F3;
    }
`;

export const TransTheadTh = styled.th`
    font-size: 20px;
	font-weight: 500;
	padding: 8px;
	background: #00BCD5;
	border: 1px solid #dddddd;
    color: white;
`;

export const TransTableTd = styled.td`
	border: 1px solid #dddddd;
	padding: 10px;
    text-align: center;
    text-transform: capitalize;
`;