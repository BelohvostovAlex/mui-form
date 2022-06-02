import React from 'react';
import Button from '@mui/material/Button';

import { getStyles, mergeClasses } from './styles';


export const MainButton = ({ text, color, width, height, onClick, className }) => {
  const classes = getStyles({width, color, height})

  const allClasses = mergeClasses(classes.root, className)
  
  return <Button onClick={onClick} sx={allClasses}>{text}</Button>;
};
