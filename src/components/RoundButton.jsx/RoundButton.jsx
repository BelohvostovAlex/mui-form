import React from 'react';
import Button from '@mui/material/Button';
import { roundButtonStyles } from './styles';


export const RoundButton = ({ onClick, text }) => {
  return <Button onClick={onClick} sx={roundButtonStyles}>{text}</Button>;
};
