import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const MainButton = ({ text, color, width, height, onClick }) => {
  const MyButton = styled(Button)({
    width: width,
    height: height ? height : 40,
    background: color,
    color: 'white',
    '&:hover': {
      background: color,
    },
    border: '2px solid black',
  });
  return <MyButton onClick={onClick}>{text}</MyButton>;
};
