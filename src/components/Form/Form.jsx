import React, {useState} from 'react';

import { MainButton } from '../MainButton/MainButton';
import { RoundButton } from '../RoundButton.jsx/RoundButton';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';

import {styles} from './styles'


export const Form = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth="md">
      <MainButton
        onClick={handleOpen}
        text="Create todo"
        color="green"
        width={200}
      />
      <Modal open={open} onClose={handleClose}>
        <Box sx={styles.box}>
          <RoundButton onClick={handleClose} text="X" />
          <Typography sx={styles.typography}>
            Title:
          </Typography>
          <TextField
            id="title"
            placeholder="Title..."
            className="textField"
            sx={styles.textField}
          />
          <Typography sx={styles.typography}>
            Description:
          </Typography>
          <TextField
            id="description"
            placeholder="Description..."
            multiline
            rows={6}
            sx={styles.textField}
          />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop={6}
          >
            <Grid item>
              <MainButton text="Create" color="green" width={160} height={50} className={styles.button}/>
            </Grid>
            <Grid item>
              <MainButton
                onClick={handleClose}
                text="Cancel"
                color="rgb(182, 52, 52)"
                width={160}
                height={50}
              />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Container>
  );
};
