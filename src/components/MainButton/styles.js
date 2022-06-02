export const getStyles = ({ width, height, color }) => ({
  root: {
    width: width,
    height: height ? height : 40,
    background: color,
    color: 'white',
    '&:hover': {
      background: color,
    },
    border: '2px solid black',
  },
});

export const mergeClasses = (...styles) => {
  return styles.reduce((acc, curr) => ({ ...acc, ...curr }), {});
};
