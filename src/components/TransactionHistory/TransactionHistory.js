import { TransactionWrapper, TransactionTitle, TransTable, TransTr, TransTheadTh, TransTableTd } from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionWrapper>
            <TransactionTitle>Transactions</TransactionTitle>
            <TransTable>
                <thead>
                    <tr>
                        <TransTheadTh>Type</TransTheadTh>
                        <TransTheadTh>Amount</TransTheadTh>
                        <TransTheadTh>Currency</TransTheadTh>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, type, amount, currency }) => {
                        return (
                            <TransTr key={id}>
                                <TransTableTd>{type}</TransTableTd>
                                <TransTableTd>{amount}</TransTableTd>
                                <TransTableTd>{currency}</TransTableTd>
                            </TransTr>
                        )
                    })}
                </tbody>
            </TransTable>
        </TransactionWrapper>
    )
}