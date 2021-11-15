import React from 'react';
import magnusCarlsen from '../assets/magnusCarlsen.jpg';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 80vh;
width: 80vw;
border-radius: 10px;
background: silver;
box-shadow: 5px 5px 10px rgba(10,10,10,0.5);
margin: 30px auto;
`;

const Title = styled.h1`
font-family: Roboto;
font-size: 40px;
color: #ff1008;
`;

const Image = styled.img`
height: 20rem;
width: 20rem;
border-radius: 5px;
border: 10px solid gold;
`;

const Text = styled.p`
padding: 20px;
font-size: 20px;
font-family: sans-serif;
color: black;
`;

const Card = () => {
  return (
    <Container>
      <Title>Will the World chess Champion manage to defend his title ? </Title>
      <Image src={magnusCarlsen} alt="World-chess-Champion" />
      <Text>The online odds for this match are Carlsen -350 and Nepomniachtchi +230, which approximates to about a 72% chance of Carlsen winning the match. However, if Nepomniachtchi can perform at his 2849 Candidates event level, and match his past performances against Carlsen, I think he's very close to a 50-50 match. However, if Carlsen performs purely as the rating differences would predict, his odds would be even higher than 80%. </Text>
    </Container>
  )
}

export default Card;