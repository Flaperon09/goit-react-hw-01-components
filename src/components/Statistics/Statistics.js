import { StatisticsWrapper, StatisticsTitle, List, ListItem, ItemHeader, ItemData } from "./Statistics.styled"

export const Statistics = ({ stats, title }) => {
    return (
        <StatisticsWrapper>
            <StatisticsTitle>{title}</StatisticsTitle>

            <List>
                {stats.map(info => {
                    return (
                        <ListItem $variant = {info.id} key={info.id}>
                            <ItemHeader>{info.label}</ItemHeader>
                            <ItemData>{info.percentage}%</ItemData>
                    </ListItem>)
                })}
            </List>
        </StatisticsWrapper>
    )
}