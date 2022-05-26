import React from 'react';

import { MainButton } from '../MainButton/MainButton';
import { RoundButton } from '../RoundButton.jsx/RoundButton';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';

const MyBox = styled(Box)({
  width: 500,
  height: 480,
  border: '2px solid black',
  background: 'rgb(181, 181, 181)',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  padding: '30px 50px',
});

const MyTextField = styled(TextField)({
  width: '100%',
  background: 'white',
  border: '2px solid black',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
  },
});

export const Form = () => {
  const [open, setOpen] = React.useState(false);
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
        <MyBox>
          <RoundButton onClick={handleClose} text="X" />
          <Typography sx={{ paddingTop: '10px', paddingBottom: '5px' }}>
            Title:
          </Typography>
          <MyTextField
            id="title"
            placeholder="Title..."
            className="textField"
          />
          <Typography sx={{ paddingTop: '10px', paddingBottom: '5px' }}>
            Description:
          </Typography>
          <MyTextField
            id="description"
            placeholder="Description..."
            multiline
            rows={6}
          />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop={6}
          >
            <Grid item>
              <MainButton text="Create" color="green" width={160} height={50} />
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
        </MyBox>
      </Modal>
    </Container>
  );
};
