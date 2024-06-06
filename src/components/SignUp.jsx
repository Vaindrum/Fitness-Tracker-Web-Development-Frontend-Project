import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import NewButton from './NewButton';

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 36px;
`;
const Title = styled.div`
    font-size: 30px;
    font-weight: 800;
    color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.text_secondary + 90};
`;

const SignUp = ({ setuser }) => {
    const [userData, setuserData] = useState({
        "Name": '',
        "Email": '',
        "Password": '',
    });
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserData({ ...userData, [name]: value });
        // Clear previous errors when user starts typing
        if (name === 'Name') {
            setNameError('');
        } else if (name === 'Email') {
            setEmailError('');
        } else if (name === 'Password') {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        // Name validation
        if (!userData.Name.trim()) {
            setNameError('Name is required');
            isValid = false;
        }

        // Email validation
        if (!userData.Email.trim()) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!validateEmail(userData.Email)) {
            setEmailError('Please enter a valid email address');
            isValid = false;
        }

        // Password validation
        if (!userData.Password.trim()) {
            setPasswordError('Password is required');
            isValid = false;
        } else if (userData.Password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            isValid = false;
        }

        if (isValid) {
            // Save the user data or proceed with login
            setuser(true);
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <Container>
            <div>
                <Title>Welcome to FitForge👋</Title>
                <Span>Please enter your details to create a new account</Span>
            </div>
            <form onSubmit={handleSubmit} style={{
            display: "flex",
            gap: "20px",
            flexDirection: "column",
        }}>
                <TextInput
                    type="text"
                    id="Name"
                    name="Name"
                    label="Name"
                    placeholder="Enter your name"
                    value={userData.Name}
                    handleChange={handleChange}
                    error={nameError}
                    required
                />
                <TextInput
                    type="email"
                    id="Email"
                    name="Email"
                    label="Email"
                    placeholder="Enter your email id"
                    value={userData.Email}
                    handleChange={handleChange}
                    error={emailError}
                    required
                />
                <TextInput
                    id="Password"
                    name="Password"
                    label="Password"
                    placeholder="Enter your password"
                    value={userData.Password}
                    handleChange={handleChange}
                    error={passwordError}
                    password
                    required
                />
                <NewButton text="SignUp" onClick={handleSubmit} />
            </form>
        </Container>
    )
}

export default SignUp;
