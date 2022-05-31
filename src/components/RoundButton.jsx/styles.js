export const roundButtonStyles = () => {
  return {
    width: 40,
    minWidth: 40,
    borderRadius: '50%',
    border: '2px solid black',
    background: 'rgb(99, 99, 99)',
    color: 'black',
    position: 'absolute',
    top: 10,
    right: 10,
    '&:hover': {
      background: 'rgb(80, 80, 80)',
    },
    transition: '.2s all linear',
  };
};
