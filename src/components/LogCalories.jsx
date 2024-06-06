import React from 'react'
import styled from 'styled-components';
import TextInput from './TextInput';
import { useState } from 'react';
import NewButton from './NewButton';
import CountsCard from './cards/CountsCard';
import { counts } from '../utils/data';

const Container = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 22px Opx;
    overflow-y: scroll;
`;

const Card = styled.div`
    width: 100%;
    max-width: 400px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    gap: 36px;
    padding: 24px;
    border: 1px solid ${({ theme }) => theme.text_primary + 20};
    border-radius: 14px;
    //border: 2px solid black;
    box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
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

const Title = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) => theme.primary};
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

const LogCalories = ({setcalories}) => {
  const [calData, setcalData] = useState({
    "totalCaloriesBurnt": '',
    "totalWorkouts": '',
    "avgCaloriesBurntPerWorkout": '',
  });
  const [loggedcal, setLoggedcal] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcalData({ ...calData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the workout data
    setLoggedcal([...loggedcal, calData]);
    // Clear the form fields after submission
    setcalData({
      "totalCaloriesBurnt": '',
      "totalWorkouts": '',
      "avgCaloriesBurntPerWorkout": '',
    });
    setcalories(false);
  };
  return (
    <Container>
    <Card>
      <Title>Log Your Calories</Title>
      <form onSubmit={handleSubmit}>
            <TextInput
                label="Total Calories Burnt"
                type="number"
                min={0}
                id="totalCaloriesBurnt"
                name="totalCaloriesBurnt"
                value={calData.totalCaloriesBurnt}
                handleChange={handleChange}
                required
            />
            <TextInput
                label="Total Workouts"
                type="number"
                min={0}
                id="totalWorkouts"
                name="totalWorkouts"
                value={calData.totalWorkouts}
                handleChange={handleChange}
                required
            />
            {calData.avgCaloriesBurntPerWorkout=calData.totalCaloriesBurnt/calData.totalWorkouts}
            <NewButton text="Log" type="submit" onClick={handleSubmit}/>
            {console.log(loggedcal)}
      </form>
    </Card>
    <div className="logged-workouts">
         {loggedcal.map((cal, index) => (
             <FlexWrap>
            {counts.map((item) => (
            <CountsCard item={item} data={cal} />
          ))}
          </FlexWrap>
        ))}
      </div>
    {console.log(calData)}
  </Container>
  )
}

export default LogCalories
