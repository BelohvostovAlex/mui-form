import React from 'react';
import Button from '@mui/material/Button';

import { buttonStyles } from './styles';


export const MainButton = ({ text, color, width, height, onClick }) => {
  return <Button onClick={onClick} sx={buttonStyles({color, width, height})}>{text}</Button>;
};
