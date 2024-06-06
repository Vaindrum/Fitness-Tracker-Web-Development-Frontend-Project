import React, { useState } from 'react';
import WorkoutCard from '../components/cards/WorkoutCard';
import styled from 'styled-components';
import TextInput from '../components/TextInput';
import NewButton from '../components/NewButton';

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
    margin-left: 20px;
    margin-bottom: 20px;
`;

const Card = styled.div`
    width: 100%;
    max-width: 500px;
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
    flex-direction: row;
    justify-content: space-between;
    gap: 22px;
    padding: 0px 16px;
    @media (max-width: 600px) {
    gap: 12px;
    }
`;
const Title = styled.div`
    padding: 0px 100px;
    font-size: 22px;
    color: ${({ theme }) => theme.text_primary}
    font-weight: 500;
`;
const Title2 = styled.div`
    font-weight: 600;
    font-size: 25px;
    color: ${({ theme }) => theme.primary};
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

const Workouts = () => {
  const [workoutData, setWorkoutData] = useState([
    {
      id: 1,
      category: "Chest",
    workoutName: "Bench Press",
    sets: "3",
    reps: "12",
    weight: "55",
    duration: "15",
    },
]);
const [newWorkoutData, setNewWorkoutData] = useState({
category: '',
workoutName: '',
sets: '',
reps: '',
weight: '',
duration: '',
});
  const [loggedWorkouts, setLoggedWorkouts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWorkoutData({ ...newWorkoutData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoggedWorkouts([...loggedWorkouts, newWorkoutData]);
    // Clear the form fields after submission
    setNewWorkoutData({ category: '',
    workoutName: '',
    sets: '',
    reps: '',
    weight: '',
    duration: '', });
  };

  return (
    <Container>
      <Wrapper>
      <Title>Workouts</Title>
      <Card>
      <Title2>Track Your Workouts</Title2>
      <form onSubmit={handleSubmit}>
            <TextInput
                label="Muscle Group"
                type="text"
                id="category"
                name="category"
                value={newWorkoutData.category}
                handleChange={handleChange}
                required
            />
            <TextInput
                label="Exercise Name"
                type="text"
                id="workoutName"
                name="workoutName"
                value={newWorkoutData.workoutName}
                handleChange={handleChange}
                required
            />
            <TextInput
                label="Sets"
                type="number"
                min={0}
                id="sets"
                name="sets"
                value={newWorkoutData.sets}
                handleChange={handleChange}
                required
            />
            <TextInput
                label="Reps"
                type="number"
                min={0}
                id="reps"
                name="reps"
                value={newWorkoutData.reps}
                handleChange={handleChange}
                required
            />
            <TextInput
                label="Weight"
                type="number"
                min={0}
                id="weight"
                name="weight"
                value={newWorkoutData.weight}
                handleChange={handleChange}
                required
            />
            <TextInput
                label="Duration"
                type="number"
                min={0}
                id="duration"
                name="duration"
                value={newWorkoutData.duration}
                handleChange={handleChange}
                required
            /><br/>
            <NewButton text="Log" type="submit" onClick={handleSubmit}/>
            {console.log(loggedWorkouts)}
      </form>
      </Card>
      </Wrapper>
      <Wrapper>

        
      {/* Display logged workouts */}
      <h3>Logged Workouts</h3>

      {console.log(loggedWorkouts)}
       <div className="logged-workouts">
         {loggedWorkouts.map((workout, index) => (
           <div key={index} className="card">
            <FlexWrap>
            <WorkoutCard key={index} workout={workout} />
            </FlexWrap>
          </div>
        ))}
      </div>
      {workoutData.map((workout,index) => (
          <div key={index} className="card">
            <FlexWrap>
            <WorkoutCard key={index} workout={workout} />
            </FlexWrap>
          </div>
        ))}
        </Wrapper>
    </Container>
  );
};

export default Workouts;