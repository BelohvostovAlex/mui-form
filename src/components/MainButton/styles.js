export const buttonStyles = ({ width, height, color }) => {
  return {
    width: width,
    height: height ? height : 40,
    background: color,
    color: 'white',
    '&:hover': {
      background: color,
    },
    border: '2px solid black',
  };
};
