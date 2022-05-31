export const boxStyles = () => {
  return {
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
  };
};

export const textFieldStyles = () => {
  return {
    width: '100%',
    background: 'white',
    border: '2px solid black',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
  };
};

export const typographyStyles = () => {
  return { paddingTop: '10px', paddingBottom: '5px' };
};
