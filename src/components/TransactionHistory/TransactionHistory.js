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
                    {items.map(prop => {
                        return (
                            <TransTr key={prop.id}>
                                <TransTableTd>{prop.type}</TransTableTd>
                                <TransTableTd>{prop.amount}</TransTableTd>
                                <TransTableTd>{prop.currency}</TransTableTd>
                            </TransTr>
                        )
                    })}
                </tbody>
            </TransTable>
        </TransactionWrapper>
    )
}