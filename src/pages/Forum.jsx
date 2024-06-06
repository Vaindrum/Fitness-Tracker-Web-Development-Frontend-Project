// Forum.js
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
  min-width: 800px;
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
`;
const Card2 = styled.div`
  min-width: 250px;
  max-width: 280px;
  max-height: 330px;
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
padding: 0px 10px;
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
    padding: 20px 76px;
    @media (max-width: 600px) {
    gap: 12px;
    }
`; 
const Forum = () => {
  // Simulated discussion threads and comments
  const [discussionThreads, setDiscussionThreads] = useState([
    {
      id: 1,
      title: "Best workout routines for beginners?",
      author: "Vaibhav Raj",
      date: "April 20, 2024",
      content: "What are some good workout routines for beginners? I'm new to fitness and looking for some advice.",
      comments: [
        { id: 1, author: "Cbum_23", date: "April 21, 2024", content: "For beginners, I recommend starting with a full-body workout routine three times a week." },
      ]
    },
    {
      id: 2,
      title: "Nutrition tips for gaining muscle?",
      author: "Prasenjeet Thul",
      date: "April 18, 2024",
      content: "I'm trying to gain muscle mass. Any nutrition tips or meal plans you recommend?",
      comments: [
        { id: 1, author: "Aditya Tripathi", date: "April 19, 2024", content: "Focus on getting enough protein and calories. Eat plenty of lean meats, fish, eggs, and dairy." },
        { id: 2, author: "GymRat24", date: "April 19, 2024", content: "You might want to consider a high-protein diet with complex carbs and healthy fats." },
      ]
    },
    // Add more discussion threads as needed
  ]);

  const [newThread, setNewThread] = useState({
    title: '',
    author: 'User', // Assuming default author is 'User'
    content: '',
  });

  const handleThreadChange = (e) => {
    const { name, value } = e.target;
    setNewThread({ ...newThread, [name]: value });
  };

  const handleThreadSubmit = (e) => {
    e.preventDefault();
    // Create new thread
    const newThreadId = discussionThreads.length + 1;
    const newThreadData = { ...newThread, id: newThreadId, date: new Date().toLocaleDateString(), comments: [] };
    setDiscussionThreads([...discussionThreads, newThreadData]);
    // Clear the form fields after submission
    setNewThread({ title: '', content: '' });
  };

  const handleCommentSubmit = (threadId, comment) => {
    // Add comment to the thread
    const updatedThreads = discussionThreads.map(thread =>
      thread.id === threadId
        ? { ...thread, comments: [...thread.comments, comment] }
        : thread
    );
    setDiscussionThreads(updatedThreads);
  };

  return (
    <Container>
      <Title>Forum</Title>
      <Card2>
      {/* Form to create new thread */}
      <form onSubmit={handleThreadSubmit}>
      <label htmlFor={`title`}>Thread Title</label>
      <Textarea
                id="title"
                name="title"
                value={newThread.title}
                onChange={handleThreadChange}
                required
            />
            <label htmlFor={`content`}>Thread Content</label>
            <Textarea
                id="content"
                name="content"
                value={newThread.content}
                onChange={handleThreadChange}
                required
            /><br/>
        <NewButton text="Comment" type="submit" onClick={handleThreadSubmit}/>
      </form>
      </Card2>

      {/* Display existing discussion threads and comments */}
      <FlexWrap>
        {discussionThreads.map(thread => (
            <Card>
            <div className="card-content">
              <Title2>{thread.title}</Title2>
              <p><strong>Author:</strong> {thread.author}</p>
              <p><strong>Date:</strong> {thread.date}</p>
              <p>{thread.content}</p>

              {/* Comments */}
              <Card>
              <Title2>Comments</Title2>
              <ul className="collection">
                {thread.comments.map(comment => (
                  <li key={comment.id} className="collection-item">
                    <strong>{comment.author}</strong> - {comment.date}
                    <p>{comment.content}</p>
                  </li>
                ))}
              </ul>
                </Card>

              {/* Form to add a comment */}
              <form onSubmit={(e) => {
                e.preventDefault();
                const commentData = {
                  id: thread.comments.length + 1,
                  author: 'User', // Assuming default author is 'User'
                  date: new Date().toLocaleDateString(),
                  content: e.target.comment.value,
                };
                handleCommentSubmit(thread.id, commentData);
                e.target.comment.value = ''; // Clear the comment field after submission
              }}>
                  <label htmlFor={`comment-${thread.id}`}>Add a Comment</label>
                  <Textarea
                    id={`comment-${thread.id}`}
                    name="comment"
                    required
                  />
                  <button style={{padding:'5px 20px', backgroundColor:'#007AFF', outline:'none', border:'1px solid black', cursor:'pointer', color:'white', borderRadius: '5px'}} type="submit">Reply</button>
              </form>
            </div>
          </Card>
        ))}
      </FlexWrap>
    </Container>
  );
};

export default Forum;
