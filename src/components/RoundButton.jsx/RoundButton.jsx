import React from 'react';
import Button from '@mui/material/Button';
import { styles } from './styles';


export const RoundButton = ({ onClick, text }) => {
  return <Button onClick={onClick} sx={styles.roundButton}>{text}</Button>;
};
