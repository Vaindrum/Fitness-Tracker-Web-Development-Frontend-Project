import React from 'react';
import styled from 'styled-components';
import split3img from '../utils/Images/split3.jpg';
import split4img from '../utils/Images/split4.jpg';
import split5img from '../utils/Images/split5.jpg';

const Container = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 22px 0px;
    overflow-y: scroll;
`;
const Card = styled.div`
  min-width: 300px;
  max-width: 300px;
  max-height: 550px;
  overflow-y: scroll;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 12px 14px;
  }
`;
const Card2 = styled.div`
  min-width: 250px;
  max-width: 280px;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 12px 14px;
  }
`;
const Title = styled.div`
    padding: 0px 0px;
    font-size: 22px;
    color: ${({ theme }) => theme.text_primary}
    font-weight: 500;
`;
const Title2 = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) => theme.primary};
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;
const FlexWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 22px;
    padding: 0px 76px;
    @media (max-width: 600px) {
    gap: 12px;
    }
`; 
const Split3 = styled.img`
    height: 180px;
`;
const Split4 = styled.img`
    height: 180px;
`;
const Split5 = styled.img`
    height: 180px;
`;

const Plans = () => {
  return (
    <Container>

      <Title>Plans</Title>
      <FlexWrap>
        <Card>
          <Title2>3-day Workout Split</Title2>
          <Split3 src={split3img}/>
          <Card2>
          <ul>
          <b>Day-1: CHEST/BACK</b>
              <li>Bench Press</li>
              <li>Incline Dumbell Press</li>
              <li>Cable Lower Chest Fly</li>
              <li>Lat Pulldown</li>
              <li>Seated Cable Rows</li>
            </ul>
          </Card2>
          <Card2><ul><b>Day-2: REST</b></ul></Card2>
          <Card2> 
          <ul>
          <b>Day-3: LEGS</b>
              <li>Squat Variation</li>
              <li>Hip Hinge Variation</li>
              <li>Leg Extension</li>
              <li>Leg Curl</li>
              <li>Calf Raise Variation</li>
            </ul>
            </Card2>
            <Card2><ul><b>Day-4: REST</b></ul></Card2>
            <Card2>
            <ul>
          <b>Day-5: SHOULDER/ARMS</b>
              <li>Should Press Variation</li>
              <li>Lateral Raise Variation</li>
              <li>Bicep Curl Variation</li>
              <li>Tricep Extension Variation</li>
            </ul>
            </Card2>
            <Card2><ul><b>Day-6: REST</b></ul></Card2>
          <Card2><ul><b>Day-7: CARDIO(Optional)</b></ul></Card2>
        </Card>
        <Card>
        <Title2>4-day Workout Split</Title2>
        <Split4 src={split4img}/>
        <Card2>
          <ul>
          <b>Day-1: UPPER STRENGTH</b>
              <li>Bench Press</li>
              <li>Overhead Press</li>
              <li>Incline Dumbell Press</li>
              <li>Lat Pulldown</li>
              <li>Lateral Raises</li>
            </ul>
          </Card2>
          <Card2>
          <ul>
          <b>Day-2: LOWER STRENGTH</b>
              <li>Squats</li>
              <li>Lunges</li>
              <li>Hip Thrusts</li>
              <li>Leg Extensions</li>
              <li>Hamstring Curls</li>
            </ul>
            </Card2>
            <Card2><ul><b>Day-3: REST</b></ul></Card2>
            <Card2>
            <ul>
          <b>Day-4: UPPER HYPERTROPHY</b>
              <li>Dumbell Bench Press</li>
              <li>Lat Pulldown</li>
              <li>Chest Fly</li>
              <li>Seated Cable Rows</li>
              <li>Cable Lateral Raises</li>
            </ul>
            </Card2>
            <Card2>
            <ul>
          <b>Day-5: LOWER HYPERTROPHY</b>
              <li>Front Squats</li>
              <li>Leg Press</li>
              <li>Leg Extensions</li>
              <li>Hamstring Curls</li>
              <li>Calf Raises</li>
            </ul>
            </Card2>
            <Card2><ul><b>Day-6: REST</b></ul></Card2>
            <Card2><ul><b>Day-7: CARDIO(Optional)</b></ul></Card2>
        </Card>
        <Card>
        <Title2>5-day Workout Split</Title2>
        <Split5 src={split5img}/>
        <Card2>
          <ul>
          <b>Day-1: PUSH</b>
              <li>Bench Press</li>
              <li>Incline Dumbell Press</li>
              <li>Tricep Extensions</li>
              <li>Shoulder Lateral Raises</li>
              <li>Shoulder Front Raises</li>
            </ul>
          </Card2>
          <Card2>
          <ul>
          <b>Day-2: PULL</b>
              <li>Lat Pulldown</li>
              <li>Seated Cable Rows</li>
              <li>Bicep curls</li>
              <li>Rear Delt Fly</li>
              <li>Shoulder Shrugs</li>
            </ul>
            </Card2>
            <Card2>
            <ul>
          <b>Day-3: LEGSS</b>
              <li>Leg Press</li>
              <li>Hamstring Extensions</li>
              <li>Calf Raises</li>
              <li>Squats</li>
              <li>Abs Workout</li>
            </ul>
            </Card2>
            <Card2>
          <ul>
          <b>Day-4: PUSH</b>
              <li>Bench Press</li>
              <li>Cable Lower Chest Fly</li>
              <li>Overhead Tricep Extensions</li>
              <li>Shoulder Press</li>
              <li>Cable Lateral Raises</li>
            </ul>
            </Card2>
            <Card2>
          <ul>
          <b>Day-5: PULL</b>
              <li>Lat Pulldown</li>
              <li>Seated Cable Rows</li>
              <li>Bicep Hammer Curls</li>
              <li>Rear Delt Face Pull</li>
              <li>Shoulder Shrugs</li>
            </ul>
            </Card2>
            <Card2><ul><b>Day-6: REST</b></ul></Card2>
            <Card2><ul><b>Day-7: CARDIO(Optional)</b></ul></Card2>
        </Card>
        
      </FlexWrap>
    
  </Container>
  );
};

export default Plans;
