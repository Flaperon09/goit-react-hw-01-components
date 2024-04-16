import { StatisticsWrapper, StatisticsTitle, List, ListItem, ItemHeader, ItemData } from "./Statistics.styled"

export const Statistics = ({ stats, title }) => {
    return (
        <StatisticsWrapper>
            {title === undefined ? '' : <StatisticsTitle>{title}</StatisticsTitle>}
            <List>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <ListItem $variant={id} key={id}>
                            <ItemHeader>{label}</ItemHeader>
                            <ItemData>{percentage}%</ItemData>
                        </ListItem>
                    )
                })}
            </List>
        </StatisticsWrapper>
    )
}