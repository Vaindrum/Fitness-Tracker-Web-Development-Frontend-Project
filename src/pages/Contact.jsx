import React, { useState } from 'react';
import styled from 'styled-components';
import NewButton from '../components/NewButton';

const Container = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 22px 0px;
    overflow-y: scroll;
`;
const Card = styled.div`
  min-width: 400px;
  max-height: 200px;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  @media (max-width: 600px) {
    padding: 12px 14px;
  }
`;

const Textarea = styled.textarea`
  height: 100px;
  width: 100%;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: transparent;
  color: ${({ theme }) => theme.text_primary};
  resize: vertical;
  &:focus {
    border: 1px solid blue;
  }
  @media (max-width: 600px) {
    font-size: 14px;
}
`;
const Title2 = styled.div`
    padding: 200px;
    font-weight: 600;
    font-size: 36px;
    color: ${({ theme }) => theme.primary};
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;
const Title = styled.div`
padding: 0px 100px;
    font-size: 22px;
    color: ${({ theme }) => theme.text_primary}
    font-weight: 500;
`;
const Wrapper = styled.div`
flex: 1;
max-width: 1400px;
display: flex;
flex-direction: column;
align-items: center;
margin-left: -200px;
@media (max-width: 600px){
    gap: 12px;
}
`;
const Contact = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement a function here to send the message to your server
    // For now, we'll just set submitted to true
    setSubmitted(true);
    // Clear the message input after submission
    setMessage('');
  };

  return (
    <Container>
      <Title>Contact Us</Title>   
      <Wrapper>   
      {submitted ? (
        <div>
          <Title2>Message received! We'll respond to you shortly.</Title2>
        </div>
      ) : (
        <Card>
        <form onSubmit={handleSubmit}>
          Write Your Message/Feedback<br/>
          <Textarea
                id="title"
                name="title"
                value={message}
                onChange={handleChange}
                required
            />
          <NewButton text="Submit" type="submit" onClick={handleSubmit}/>
        </form>
        </Card>
      )}
      </Wrapper>  
    </Container>
  );
};

export default Contact;
