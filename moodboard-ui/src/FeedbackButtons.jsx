import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  border: none;
  font-size: 16px;
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  border-radius: 25px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  color: white;
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.8);
  }
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const LikeButton = styled(Button)`
  background: linear-gradient(45deg, #0088CC, #3F9CE8);
  &:hover {
    background: linear-gradient(45deg, #3F9CE8, #0088CC);
  }
`;

const DislikeButton = styled(Button)`
  background: linear-gradient(45deg, #CC0000, #E83F3F);
  &:hover {
    background: linear-gradient(45deg, #E83F3F, #CC0000);
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  margin: auto;
`;


function FeedbackButtons({ onLike, onDislike }) {
    return (
        <ButtonsContainer>
            <LikeButton onClick={onLike}>👍 Like</LikeButton>
            <DislikeButton onClick={onDislike}>👎 Dislike</DislikeButton>
        </ButtonsContainer>
    );
}
export default FeedbackButtons;