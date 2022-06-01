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

// export const mergeClasses = (styles1, styles2) => {
//   if (!styles2) {
//     return styles1;
//   }
//   return {
//     ...styles1,
//     ...styles2,
//   };
// };

export const mergeClasses = (...styles) => {
  return styles.reduce((prev, curr) => {
    return { ...prev, ...curr };
  }, {});
};
//если много стилей может передаваться разных, может так лучше или бред?
