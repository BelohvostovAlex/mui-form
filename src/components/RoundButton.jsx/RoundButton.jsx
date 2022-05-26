import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const MyRoundButton = styled(Button)({
  width: 40,
  minWidth: 40,
  borderRadius: '50%',
  border: '2px solid black',
  background: 'rgb(99, 99, 99)',
  color: 'black',
  position: 'absolute',
  top: 10,
  right: 10,
});

export const RoundButton = ({ onClick, text }) => {
  return <MyRoundButton onClick={onClick}>{text}</MyRoundButton>;
};
