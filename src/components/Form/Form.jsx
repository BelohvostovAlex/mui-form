import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

const MyButton = styled(Button)({
  width: 200,
  background: 'green',
  color: 'white',
  '&:hover': {
    background: 'rgb(18, 112, 18)',
  },
  border: '2px solid black',
});

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
      <MyButton onClick={handleOpen}>Create todo</MyButton>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <MyBox>
          <MyRoundButton onClick={handleClose}>X</MyRoundButton>
          <Typography sx={{ paddingTop: '10px', paddingBottom: '5px' }}>
            Title:
          </Typography>
          <MyTextField id="title" placeholder='Title...' className='textField'/>
          <Typography sx={{ paddingTop: '10px', paddingBottom: '5px' }}>
            Description:
          </Typography>
          <MyTextField id="description" placeholder='Description...' multiline rows={6} />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop={6}
          >
            <Grid item>
              <MyButton sx={{ width: 160, height: 50 }}>Create</MyButton>
            </Grid>
            <Grid item>
              <MyButton sx={{ width: 160, height: 50, background: 'rgb(182, 52, 52)'}} onClick={handleClose}>
                Cancel
              </MyButton>
            </Grid>
          </Grid>
        </MyBox>
      </Modal>
    </Container>
  );
};