import React from 'react'
import styled from 'styled-components';
import { counts } from "../utils/data"
import CountsCard from '../components/cards/CountsCard';
import WeeklyStatCard from '../components/cards/WeeklyStatCard';
import CategoryChart from '../components/cards/CategoryChart';
import { useState } from 'react';
import LogCalories from '../components/LogCalories';

const Container = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 22px Opx;
    overflow-y: scroll;
`;
const Wrapper = styled.div`
    flex: 1;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    @media (max-width: 600px){
        gap: 12px;
    }
`;
const Title = styled.div`
padding: 0px 16px;
    font-size: 22px;
    color: ${({ theme }) => theme.text_primary}
    font-weight: 500;
`;
const FlexWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 22px;
    padding: 0px 16px;
    @media (max-width: 600px) {
    gap: 12px;
    }
`;

const Dashboard = () => {
    const data = {
        "totalCaloriesBurnt": 13500,
        "totalWorkouts": 6,
        "avgCaloriesBurntPerWorkout": 2250,
        "totalWeeksCaloriesBurnt": {
            "weeks": ["17th", "18th", "19th", "20th", "21th", "22th", "23th"],
            "caloriesBurned": [10500, 0, 0, 0, 0, 0, 13500]
        },
        "pieChartData": [
            {
                "id": 0,
                "value": 6000,
                "label": "Legs"
            },
            {

                "id": 1,
                "value": 1500,
                "label": "Back"
            },
            {

                "id": 2,
                "value": 3750,
                "label": "Shoulder"
            },
            {
                "id": 3,
                "value": 2250,
                "label": "ABS"
            }
        ]
    };
    const [calories, setcalories] = useState(true);
    return (
        <Container>
            <Wrapper>
                <Title>Dashboard</Title>
                <FlexWrap>
                    <LogCalories setcalories={setcalories} />
                    {!calories ? (
                        ''
                    ) : (
                        <FlexWrap>
                            {counts.map((item) => (
                                <CountsCard item={item} data={data} />
                            ))}
                        </FlexWrap>
                    )}
                </FlexWrap>

                <FlexWrap>
                    <WeeklyStatCard data={data} />
                    <CategoryChart data={data} />
                </FlexWrap>
            </Wrapper>
        </Container>
    )
}

export default Dashboard
